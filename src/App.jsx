import './App.css'
import Card from "./components/Card";

const App = () => {

  return (
    <div className="App">
      <h1>🍂Fall Fun in Metro Detroit🍂</h1>
      <Card img="https://www.awesomemitten.com/wp-content/uploads/2021/08/Detroit-Zoo-Zoo-Boo.png" event="Detroit Zoo – Zoo Boo" location="Royal Oak"/>
      <Card img="https://www.awesomemitten.com/wp-content/uploads/2021/08/Yates-Cider-Mill.png" event="Yates Cider Mill" location="Rochester Hills"/>
      <Card img="https://cdn.shopify.com/s/files/1/0005/2166/6675/files/pumpkin_collage-01_600x600.jpg?v=1568691255" event="Glass Pumpkin Fest" location="Dearborn" />
      <Card img="https://www.mibeer.com/Portals/0/EasyGalleryImages/3/3/yutacar-28290-unsplash.jpg" event="Detroit Fall Beer Festival" location="Detroit"/>
      <Card img="https://www.awesomemitten.com/wp-content/uploads/2021/08/Notorious-313-Haunted-6th-Precinct-Tour-1.png" event="Haunted 6th Precinct Tour" location="Detroit"/>
      <Card img="https://cdn-az.allevents.in/events5/banners/600fca13fbf0b705f7df25b30148989d429c4593b83eb128eb301c9f6c5cf1fd-rimg-w468-h312-gmir.jpg?v=1694006992" event="Hallowe'en in Greenfield Village" location="Dearborn"/>
      <Card img="https://www.awesomemitten.com/wp-content/uploads/2021/08/Northville-Heritage-Festival.png" event="Northville Heritage Festival" location="Northville"/>
      <Card img="https://www.awesomemitten.com/wp-content/uploads/2021/08/Blakes-Orchard.png" event="Blake's Big Apple" location="Armada"/>
      <Card img="https://images.metroparent.com/wp-content/uploads/2022/09/Fall-Fest-Canterbury-746x500.jpg" event="Michigan Fall Festival" location="Lake Orion"/>
      <Card img="https://lh3.googleusercontent.com/p/AF1QipNJomSA4ZDvbMJK-ElSOikbNNiEvK4WB6yNl-AF=s1360-w1360-h1020" event="Erebus Haunted House" location="Pontiac"/>
    </div>
  )
}

export default App
