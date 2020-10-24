import project_jinkyuKang from "../../assets/images/projects/project-jinkyukang.png";
import gif_jinkyuKang from "../../assets/images/projects/project-jinkyukang.gif";
import project_holahoon from "../../assets/images/projects/project-holahoon.png";
import gif_holahoon from "../../assets/images/projects/project-holahoon.gif";

export const dkData = [
  {
    pageUrl: "jinkyu-kang",
    english: {
      title: "designer - Jinkyu Kang",
      description:
        "This project was built in collaboration with Jinkyu Kang, a designer to build a portfolio site to showcase his works. Despite the disadvantage in lack of SEO, I've personally decided to use React.js to test how much I've really understood the core concept of React.js. The main packages used in this project were framer-motion and react-router-dom. Framer-motion was used to improve UX by animating page transition effects and smoother animation effects on elements like svg. One down-side of this particular project is the slow image loading on initial visit of the site due the size of the images being very big which was a request by the designer in need of having a crisp image.",
    },
    korean: {
      title: "디자이너 - 강진규",
      description:
        "디자이너 강진규님와 함께 콜라보 하여 디자인 토대로 만든 강진규님의 포트폴리오 쇼케이스 사이트 입니다. React.js의 단점인 SEO를 감안하면서도 개인적으로 React.js를 어느정도 이해하고 응용할 수 있는지를 테스트 해보기 위함이었습니다. 주로 사용한 패키지들은 framer-motion 과 react-router-dom 입니다. Framer-motion을 사용하여 페이지 트랜지션 에니메이션을 줌으로서 더 나은 UX를 제공함과 SVG와 같은 엘리먼트에 좀더 스무스한 이팩트를 주었습니다. 이 프로젝트의 단점이라 할수있는 부분은 이미지 로딩시간이라 할수있습니다. 디자이너의 요청하에 선명한 이미지를 보여주기 위하여 이미지 사이즈를 줄이지 않아 이니셜 로딩시간이 길어졌습니다.",
    },
    year: "2020",
    image: project_jinkyuKang,
    gifImage: gif_jinkyuKang,
    linkUrl: "https://www.erugogada.com/",
    githubUrl: "https://github.com/holahoon/Jin-Kyu-Kang",
  },
  {
    pageUrl: "old-holahoon",
    english: {
      title: "holahoon(previous -v)",
      description:
        "This portfolio was made in the late 2019 to showcase some of the projects I've built which in plain HTML, CSS and JavaScript along with libraries like D3.js and React.js. Although I had a very little knowledge of React.js at the time of developing most of the projects, I've had a pleasure and building experience collaborating with a designer which has helped me to have a keen eye for details. I've currently replaced my portolio with the current site you are on.",
    },
    korean: {
      title: "holahoon (전 버젼)",
      description:
        "이 프로젝트는 2019년 후반에 만들었던 개인 포트폴리오 입니다. 기본적인 HTML, CSS, JavaScript와 D3.js, React.js같은 라이브러리를 사용하여 만든 프로젝트들을 담고 있습니다. 당시 React.js의 대한 이해와 기본적인 지식이 부족한 상태였지만 디자이너와 함께 협업하여 아주 작은 디테일까지도 볼수있는 눈을 여는 좋은 경험이었습니다. 현재는 지금 보고계신 사이트로 포트폴리오를 대체하였습니다.",
    },
    year: "2019",
    image: project_holahoon,
    gifImage: gif_holahoon,
    linkUrl: "https://www.google.com/",
    githubUrl: "https://github.com/holahoon/new-holahoon",
  },
];
