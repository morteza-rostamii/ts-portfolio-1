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

# video auto play: 

useEffect(() => {

  if (videoRef.current == null) return;

  if (isVideoPlaying) {
    videoRef.current.currentTime = 0;
    videoRef.Current.play();
  }
}, [isVideoPlaying])

# then we use: 
onMouseenter
and 
onMouseLeave

<video 

className="
${isVideoPlaying ? 'opacity=100' : 'opacity=0'}

block h-full object-cover absolute inset-0 transition-opacity duration-200"

ref={vidoeRef}
muted
playsInline
src={videoUrl}
>

# image border animation
<img
classname=`

block w-full h-full object-cover transition-[border-radius] duration-200 
# some delay for video to show up
delay-200
${isVideoPlaying ? 'rounded-none' : 'rounded-xl'}
`
/>

#=========================================

# sidebar:
==

# small sidebar
aside:
  classname: 
    sticky top-0 overflow-y-auto scrollbar-hidden lg:hidden

# large sidebar: (desktop)
  classname:
    w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden 

# for show more of less =: just render more items on more clicked.

==========
# custom scrollBar:

# firefox

* {
  scrollbar-width: thin;
}

*::-webkit-scrollbar {
  @apply bg-transparent w-2;
}

*::-webkit-scrollbar-thumb {
  @apply bg-secondary-dark rounded-full;
}

.scrollbar-hidden::-webkit-scrollbar-thumb {
  @apply bg-transparent;
}

.scrollbar-hidden::hover::-webkit-scrollbar-thumb {
  @apply bg-secondary;
}

#===================================

# sidebar: on small screen and large
==

type TSidebarContext = {
  isLargeOpen: boolean,
  isSmallOpen: boolean,
  toggle: () => void,
  close: () => void,
}

const SidebarContext = createContext<TSidebarContext | null>(null);

export function SidebarProvider({children}: SidebarProviderProps) {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(flase);

  // on large screen =: close the offCanvas
  useEffect(() => {
    const handle = () => {
      if (!isScreenSmall()) setIsSmallOpen(false);
    }

    window.addEventListener("resize", handle);

    return () => window.removeEventListener("resize", handle);
  }, []);

  function isScreenSmall() {
    return window.innerWidth < 1024;
  }

  function toggle() {
    if (isScreenSmall()) {
      setIsSmallOpen(c => !c);
    }
    else {
      setIsLargeOpen(c => !c);
    }
  }

  function close() {
    if (isScreenSmall()) {
      setIsSmallOpen(false)
    } 
    else {
      setIsLargeOpen(false)
    }
  }

  return <SidebarContext.Provider value={{
    isLargeOpen,
    isSmallOpen,
    toggle,
    close,
  }}>
    {children}
  </SidebarContext.Provider> 
}

export function useSidebarContext() {
  const value = useContext(SidebarContext);
  if (value == null) {
    throw Error("can not be used outside of provider.")
  }
  return value;
}

-->