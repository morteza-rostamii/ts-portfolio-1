// import { faker } from "@faker-js/faker"
// import TwitchCarousel from "./components/TwitchCarousel"
// import { Image } from "@chakra-ui/react";

// const TwitchHome = () => {
//   return (
//     <div
//     className="
//     flex items-center justify-center bg-red-50
//     p-20
//     "
//     >
//       <TwitchCarousel
//       width={200}
//       height={200}
//       cards={Cards}
//       />
//     </div>
//   )
// }

// const cards = Array.from({length: 5}).map((el:any) => {
//   return {
//     id: faker.string.uuid(),
//     image: faker.image.urlLoremFlickr({category: 'nature'}),
//   };
// });

// const Card = ({item}:any) => {
//   return(
//     <div
//     className="w-full aspect-video overflow-hidden"
//     >
//       <Image
//       src={item.image}
//       />
//     </div>
//   )
// }

// const Cards = cards.map((el:any) => {
//   return <Card key={el.id} item={el}/>;
// });

// export default TwitchHome