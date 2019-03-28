class createScssSeleteor {
  constructor(d, type) {
    this.ROOT = d;
    this.SASSOBJ = {};
    this.CLASSNAME = '.' + this.ROOT.className;
    this.connectStr = '';
    this.SASSOBJ[this.CLASSNAME] = {};
    this.type = type;
  }

  createClassTree(dom) {
    let obj = {};
    for (let i = 0; i < dom.children.length; i++) {
      let item = dom.children[i];
      obj = this.returnDomObj(item);
      // console.log(obj);
      this.createSass(obj);
      this.createClassTree(item);
      if (dom.children[i].hasAttribute('notRepetition')) {
        break;
      }
    }
  }

  returnDomObj(dom) {
    let temp = {};
    let domeName = dom.className ? '.' + dom.className : dom.localName;
    if (dom.children.length) {
      temp[domeName] = {};
      for (let i = 0; i < dom.children.length; i++) {
        temp[domeName][dom.children[i].className ? '.' + dom.children[i].className : dom.children[i].localName] = {};
      }
    }
    return temp;
  }

  createSass(obj, type) {
    type = this.type;
    for (let key in obj) {
      if (key) {
        if (type) {
          this.connectStr = `['${key}']`;
        } else {
          this.connectStr += `['${key}']`;
        }
        eval(`this.SASSOBJ[this.CLASSNAME]${this.connectStr}=obj[key]`);
        // console.log(key, obj[key]);
      }
    }
    console.log(JSON.stringify(this.SASSOBJ).replace(/[":,]/g, ''));
  }
}

export default createScssSeleteor;
