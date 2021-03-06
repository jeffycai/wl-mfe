/**
 * @author weilan
 * @time 2020.05.20
 * @name 无需服务端获取的微应用
 */

const noAuthApps = [
  {
    module: "subapp-login",
    defaultRegister: true,
    devEntry: "//localhost:2753",
    depEntry: "http://login.mfe.wlui.com.cn/",
    routerBase: "/login",
    data: [
      {
        id: "1",
        title: "login",
        icon: "el-icon-monitor",
        children: [
          {
            id: "1-1",
            title: "home",
            url: "/login"
          }
        ]
      }
    ]
  },
]

export default noAuthApps;