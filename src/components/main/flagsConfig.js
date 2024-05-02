import globalStyle from "../../stores/globalStyles";
let lglobalStyle = {};
globalStyle.subscribe(gs => {
    lglobalStyle = gs;
})
const flagConfig = {
    src: { activeColor: lglobalStyle.activeColor, activeMono: lglobalStyle.activeMono },
    dev: { activeColor: lglobalStyle.activeColor, activeMono: lglobalStyle.activeMono },
    dep: { activeColor: '#FFB800', activeMono: '#FFB800' },
    v1: { activeColor: lglobalStyle.activeColor, activeMono: lglobalStyle.activeMono },
    live: { activeColor: lglobalStyle.successColor, activeMono: lglobalStyle.successColor },
    docs: { activeColor: lglobalStyle.activeColor, activeMono: lglobalStyle.activeMono },
}


export { flagConfig }