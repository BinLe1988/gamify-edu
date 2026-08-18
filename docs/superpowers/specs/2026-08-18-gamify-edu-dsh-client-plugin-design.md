# Gamify Edu dsh Client 插件改造设计

## 背景与目标

`gamify-edu` 当前是一个独立运行的 React + TypeScript + Vite 应用。本次改造将其转换为 DeepSeek Harness（dsh）的 Client 插件，使现有教育首页能够作为 dsh Web Shell 中的可加载、可卸载、可构建浏览器插件运行，同时保留 standalone Vite 预览能力。

本次不引入 Host API、用户登录、课程后端、持久化或 AI 教学业务。插件只负责现有教育首页的浏览器呈现与 dsh 生命周期接入。

## 约束与合规

- 遵循 `deepseek-harness/docs/development.zh.md`：插件仅进入 Client aggregate；Client 阶段生成浏览器 bundle 与 Node loader；入口通过 `package.json` 的 `dsh.client` 元数据声明。
- 保留项目现有 MIT `LICENSE`、版权归属、项目链接和第三方组件声明。
- 不把 dsh 内部代码复制进项目；dsh 依赖通过 peer/dev dependency 声明，并以稳定公共接口通信。
- 不提交真实凭证，不依赖 DeepSeek API key。

## 方案

采用单包 Client UI 插件：

1. 保留现有页面组件与资源，增加 dsh 浏览器入口 `src/client/index.ts`。
2. 增加空 Host 入口 `src/index.ts`，让 Loader 能发现插件但不提供 Host 行为。
3. 在 `package.json` 中增加 `./client` 导出及 `dsh.client` 声明，声明浏览器平台和必要注入服务。
4. 浏览器入口通过 dsh `slots` 服务注册一个教育首页 surface；组件自身不直接操作 Host、WebSocket 或 API。
5. 将全局样式整理为插件可控的样式入口，避免覆盖 dsh Shell 的全局布局与主题。
6. 保留 `src/main.tsx` 和 Vite 配置作为 standalone 预览入口；正式 dsh 构建使用 `tsdown`。

## 目录与模块边界

- `src/index.ts`：Host half 空入口。
- `src/client/index.ts`：Client 插件生命周期、slot 注册和卸载逻辑。
- `src/client/GamifyEduSurface.tsx`：教育首页 React surface，组合现有页面组件。
- `src/client/styles.css`：Client surface 需要的样式入口。
- `src/main.tsx`：standalone Vite 预览，仅负责挂载 `GamifyEduSurface`。
- `tsconfig.client.json`：浏览器侧 TypeScript 配置和 dsh Client 依赖边界。
- `tsdown.config.ts`：Client bundle 配置，使用 dsh 的 Client bundle helper。

组件层继续保持纯 React；只有 `src/client/index.ts` 依赖 Cordis/dsh Client runtime 与 slot 服务。这样可在不启动 dsh 的情况下测试页面，也可在 dsh 环境中由插件生命周期管理注册项。

## 生命周期与数据流

```text
dsh Loader
  -> 读取 package.json dsh.client
  -> 加载 ./client 浏览器入口
  -> 等待 slots 服务
  -> 注册 gamify-edu 首页 surface
  -> slot renderer 挂载 GamifyEduSurface
  -> 插件卸载时 dispose registration
```

页面数据保持静态，来自现有组件常量与资源；本次不新增网络请求。任何缺少可选 dsh 服务的情况都不会阻止 standalone 页面构建；缺少 `slots` 这一硬依赖时，插件保持 pending，避免产生半注册 UI。

## 构建与验证

- `npm run build`：继续验证 standalone Vite 产物。
- `pnpm run typecheck` 或等价的本地 Client TypeScript 检查：验证插件入口与 React 类型。
- `pnpm run bundle`：生成 dsh 约定的 Client bundle。
- 插件 smoke test：确认 Client 入口可以加载、注册 surface，并在 dispose 后移除注册。
- 检查 bundle：不包含 Node-only API、不读取环境密钥、不启动独立服务器。

## 非目标

- 不实现课程数据服务、账号系统、支付或用户进度持久化。
- 不实现 Host 端远程方法或 API Gateway。
- 不把完整 dsh 仓库复制到 `gamify-edu`。
- 不拆分多个独立插件包。

