// 派生状态。也可以理解为set、get中的get。有两个可选参数，state、getters分别可以获取state中的变量和其它getters。和vue中的computed类似
export const userinfo = state => state.userinfo
export const userToken = state => state.userToken
