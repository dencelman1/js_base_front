

function DeepEvent(e, pos, ut) {
    this.pos = Array.from(pos);
    this.afterPos = null;
    
    this.currentTarget = e.currentTarget;
    this.shiftKey = e.shiftKey;
    this.altKey = e.altKey;
    this.key = e.key || "";
    
    this.sv = (
        (pos[2] === -1)
        ? ""
        : (
            ut.selectValue(
                this.currentTarget,
                this.pos,
                ut,
                ut.selectAhead(this.pos)
            )
        )
    );
};

export default DeepEvent;