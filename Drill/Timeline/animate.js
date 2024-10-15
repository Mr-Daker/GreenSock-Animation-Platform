let tl = gsap.timeline();

tl.from('.heading',{
  x:-1200,
  duration:3,
})

tl.from('img',{
  y:200,
  duration:3,
  opacity:0
})


tl.from('.pointer1',{
  y:200,
  duration:2,
  opacity:0
})


tl.from('.pointer2',{
  y:200,
  duration:2,
  opacity:0
})
tl.from('.pointer3',{
  y:200,
  duration:2,
  opacity:0
})