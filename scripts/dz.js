class Dz {
    constructor(element, num) {
        this.element = element;
        this.num = num;
    }
    dz() {
        this.element.click(function () {
            var st = null;
            this.num = add(this.num);
            if (this.num >= 10) {
                this.num = 0;
                this.element.css('-webkit-filter', ' grayscale(1);');
            } else {
                this.element.css('-webkit-filter', ' grayscale(0);');
                this.element.find('.add').show(0);
                this.element.append('<span class="add addanmt add'+this.num+'">+1</span>');
                // setTimeout(function(){
                //     removeAdd('.add');
                // }, 1000)
            }
        });
        function removeAdd(cname) {
            this.element.find(cname).remove();
        }
    }
}
class Dzs extends Dz {
    constructor(element, num) {
        super(element, num)
    }
}

export default Dzs;