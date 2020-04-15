// 注意这里我们引入任何非js文件，我们都需要加上the file extension，比如这里是.css
import '../styles/image_viewer.css';
const image = document.createElement('img');
image.src = 'https://www.google.com/logos/doodles/2020/thank-you-public-transportation-workers-6753651837108759-law.gif';
document.body.appendChild(image);