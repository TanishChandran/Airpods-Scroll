function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = Math.min(864,this.window.innerWidth);
canvas.height = Math.min(1080,this.window.innerHeight);


window.addEventListener("resize", function () {
  canvas.width = this.window.innerWidth;
  canvas.height = this.window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./001.png
     ./002.png
     ./003.png
     ./004.png
     ./005.png
     ./006.png
     ./007.png
     ./008.png
     ./009.png
     ./010.png
     ./011.png
     ./012.png
     ./013.png
     ./014.png
     ./015.png
     ./016.png
     ./017.png
     ./018.png
     ./019.png
     ./020.png
     ./021.png
     ./022.png
     ./023.png
     ./024.png
     ./025.png
     ./026.png
     ./027.png
     ./028.png
     ./029.png
     ./030.png
     ./031.png
     ./032.png
     ./033.png
     ./034.png
     ./035.png
     ./036.png
     ./037.png
     ./038.png
     ./039.png
     ./040.png
     ./041.png
     ./042.png
     ./043.png
     ./044.png
     ./045.png
     ./046.png
     ./047.png
     ./048.png
     ./049.png
     ./050.png
     ./051.png
     ./052.png
     ./053.png
     ./054.png
     ./055.png
     ./056.png
     ./057.png
     ./058.png
     ./059.png
     ./060.png
     ./061.png
     ./062.png
     ./063.png
     ./064.png
     ./065.png
     ./066.png
     ./067.png
     ./068.png
     ./069.png
     ./070.png
     ./071.png
     ./072.png
     ./073.png
     ./074.png
     ./075.png
     ./076.png
     ./077.png
     ./078.png
     ./079.png
     ./080.png
     ./081.png
     ./082.png
     ./083.png
     ./084.png
     ./085.png
     ./086.png
     ./087.png
     ./088.png
     ./089.png
     ./090.png
     ./091.png
     ./092.png
     ./093.png
     ./094.png
     ./095.png
     ./096.png
     ./097.png
     ./098.png
     ./099.png
     ./100.png
     ./101.png
     ./102.png
     ./103.png
     ./104.png
     ./105.png
     ./106.png
     ./107.png
     ./108.png
     ./109.png
     ./110.png
     ./111.png
     ./112.png
     ./113.png
     ./114.png
     ./115.png
     ./116.png
     ./117.png
     ./118.png
     ./119.png
     ./120.png
     ./121.png
     ./122.png
     ./123.png
     ./124.png
     ./125.png
     ./126.png
     ./127.png
     ./128.png
     ./129.png
     ./130.png
     ./131.png
     ./132.png
     ./133.png
     ./134.png
     ./135.png
     ./136.png
     ./137.png
     ./138.png
     ./139.png
     ./140.png
     ./141.png
     ./142.png
     ./143.png
     ./144.png
     ./145.png
     ./146.png
     ./147.png
     ./148.png
     ./149.png
     ./150.png
     ./151.png
     ./152.png
     ./153.png
     ./154.png
     ./155.png
     ./156.png
     ./157.png
     ./158.png
     ./159.png
     ./160.png
     ./161.png
     ./162.png
     ./163.png
     ./164.png
     ./165.png
     ./166.png
     ./167.png
     ./168.png
     ./169.png
     ./170.png
     ./171.png
     ./172.png
     ./173.png
     ./174.png
     ./175.png
     ./176.png
     ./177.png
     ./178.png
     ./179.png
     ./180.png
     ./181.png
     ./182.png
     ./183.png
     ./184.png
     ./185.png
     ./186.png
     ./187.png
     ./188.png
     ./189.png
     ./190.png
     ./191.png
     ./192.png
     ./193.png
     ./194.png
     ./195.png
     ./196.png
     ./197.png
     ./198.png
     ./199.png
     ./200.png
     ./201.png
     ./202.png
     ./203.png
     ./204.png
     ./205.png
     ./206.png
     ./207.png
     ./208.png
     ./209.png
     ./210.png
     ./211.png
     ./212.png
     ./213.png
     ./214.png
     ./215.png
     ./216.png
     ./217.png
     ./218.png
     ./219.png
     ./220.png
     ./221.png
     ./222.png
     ./223.png
     ./224.png
     ./225.png
     ./226.png
     ./227.png
     ./228.png
     ./229.png
     ./230.png
     ./231.png
     ./232.png
     ./233.png
     ./234.png
     ./235.png
     ./236.png
     ./237.png
     ./238.png
     ./239.png
     ./240.png
     ./241.png
     ./242.png
     ./243.png
     ./244.png
     ./245.png
     ./246.png
     ./247.png
     ./248.png
     ./249.png
     ./250.png
     ./251.png
     ./252.png
     ./253.png
     ./254.png
     ./255.png
     ./256.png
     ./257.png
     ./258.png
     ./259.png
     ./260.png
     ./261.png
     ./262.png
     ./263.png
     ./264.png
     ./265.png
     ./266.png
     ./267.png
     ./268.png
     ./269.png
     ./270.png
     ./271.png
     ./272.png
     ./273.png
     ./274.png
     ./275.png
     ./276.png
     ./277.png
     ./278.png
     ./279.png
     ./280.png
     ./281.png
     ./282.png
     ./283.png
     ./284.png
     ./285.png
     ./286.png
     ./287.png
     ./288.png
     ./289.png
     ./290.png
     ./291.png
     ./292.png
     ./293.png
     ./294.png
     ./295.png
     ./296.png
     ./297.png
     ./298.png
     ./299.png
     ./300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to(".page3",{
  scrollTrigger:{
    trigger:`.page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})