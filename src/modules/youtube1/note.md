<!-- 

# build a youtube homepage clone:
==

# header:

# chips carousel: 
# left arrow:
bg-gradient-to-r from-white from-50% to-transparent

# in flexbox, for a flex-items to not get skuished:
flex-shrink-0

# input focus color:
focus:border-blue-500 outline-none

#=======================

# side-icons
# main
# top chips

# Grid:
==

col-1 - col-2

# this should scroll
<div
classname='
grid grid-cols-[auto, 1fr]
flex-grow-1 overflow-auto
'
>
  <Sidebar/>

  div: classname="sticky top-0 z-10 pb-4"
  <Chips/>
  <Main/>
</div>

=========================================
#Chips:

div:
  className: overflow-x-hidden relative

  div: 
    className: flex whitespace-nowrap transition-transform w-[max-content]

# center absolute element:
  className: absolute left-0 top-1/2 --translate-y-1/2

# how to scroll the chipsContainer by some number of px
to left and right:?

state: translate = 0;
TRANSLATE_AMOUNT = 200;

leftButton:
  onClick: () => 
    const newTranslate = translate - TRANSLATE_AMOUNT;
    if (newTranslate <= 0) {
      return 0;
    }
    return newTranslate;

  style={{
    transform: `translateX(-${translate}px)`,
  }}

# for scroll right: 
==

scrollContainer:
  ref={containerRef}

# find the total size of the scrollContainer:
==

# all scrollable width =: include the part of container that is outside of view.
# current.scrollWidth

# width of the only visiable part of container 
# current.clientWidth

# rightButton:
  onClick: () => 
    if (containerRef.current === null) return;

    const edge = containerRef.current.scrollWidth;
    const width = containerRef.current.clientWidth;

    const newTranslate = translate + TRANSLATE_AMOUNT;

    if (newTranslage + width >= edge) return 0; 
    return newTranslate;

# show or hide left and right button

useEffect(() => {
  if (containerRef.current === null) return;

  const observer = new ResizeObserver(entries => {

    // run this each time we scroll or items are added

    const container = entries[0]?.target
    if (container === null) return

    setIsLeftVisible(translate ? 0)

    setIsRightVisible(

      translate + container.clientWidth < container.scrollWidth
    )
  })

  observer.observe(containerRef.current)

  return () => observer.disconnect();

}, [categories, translate])

========================================

# video section (Grid)
==

div:
  classname:
    grid gap-4 grid-cols-[repeat(auto-fill, minmax(300px, 1fr))]

# video type:

type Video = {
  id: string,
  title: string,
  channel: {
    id: string,
    name: string,
    profileUrl: string,
  },
  views: number,
  postedAt: Date,
  duration: number,
  thumbnailUrl: string,
  videoUrl: string,
}

# 




-->