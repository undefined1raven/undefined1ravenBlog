import globalStyle from "../../stores/globalStyles";
let lglobalStyle = {};
globalStyle.subscribe(gs => {
    lglobalStyle = gs;
})
const flagConfig = {
    src: { activeColor: lglobalStyle.activeColor, activeMono: lglobalStyle.activeMono, type: 'button' },
    dev: { activeColor: lglobalStyle.activeColor, activeMono: lglobalStyle.activeMono, type: 'label' },
    dep: { activeColor: '#FFB800', activeMono: '#FFB800', type: 'label' },
    v1: { activeColor: lglobalStyle.activeColor, activeMono: lglobalStyle.activeMono, type: 'label' },
    live: { activeColor: lglobalStyle.successColor, activeMono: lglobalStyle.successColor, type: 'button' },
    docs: { activeColor: lglobalStyle.activeColor, activeMono: lglobalStyle.activeMono, type: 'button' },
}


export { flagConfig }