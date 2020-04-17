//import big from "../assets/big.jpg";
import small from "../assets/small.jpg";
// 注意这里我们引入任何非js文件，我们都需要加上the file extension，比如这里是.css
import "../styles/image_viewer.css";

export default () => {
    const image = document.createElement("img");
    image.src = small;
    document.body.appendChild(image);
}


// const bigImage = document.createElement("img");
// bigImage.src = big;
// document.body.appendChild(bigImage);