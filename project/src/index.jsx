import React , { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Menu from 'components/Menu';

import './style.css';

const menuItems = [
    {
        href: '#',
        title: 'Home'
    },
    {
        href: '#',
        title: 'New features'
    },
    {
        href: '#',
        title: 'Press'
    },
    {
        href: '#',
        title: 'New hires'
    },
    {
        href: '#',
        title: 'About'
    }
];
const post = {
    header: 'This is the first article!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores assumenda, dignissimos dolore dolorum eaque id laudantium magnam nesciunt omnis praesentium quasi rem reprehenderit vitae voluptatem. Ad aliquam, aspernatur consequuntur, dicta dignissimos doloremque earum eum ex expedita, harum illo impedit iusto optio provident quaerat quibusdam repudiandae sed similique suscipit tempora veritatis voluptatem voluptatibus! Animi dolore illo in quasi qui! Aliquid aspernatur at autem consequatur cum dolore dolorem ea, et fugiat illum iure modi nobis quaerat quam quisquam ratione repellendus tempora tenetur veniam vero! Accusamus aliquam animi debitis distinctio eaque, fugit molestiae placeat provident quaerat quasi recusandae ut. Consectetur, iure laudantium.\n' +
    '                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consequatur delectus doloremque dolorum eaque eius enim, fuga fugit non officia, quasi sunt velit, veniam voluptatem. Ad blanditiis excepturi illo, laudantium nesciunt nihil perferendis placeat porro, qui quia sed sequi.\n' +
    '                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam, delectus deserunt dignissimos distinctio dolores eius ipsum molestiae necessitatibus nihil officia placeat recusandae repellendus reprehenderit repudiandae rerum sed sequi sint sit soluta tempora vitae voluptatem. Ad atque doloribus hic nostrum. Alias aliquid animi commodi consequuntur cum deserunt dicta dolores eveniet hic, in maiores maxime molestias nisi perspiciatis possimus quae quam? Aliquam architecto cupiditate eos eum, illo itaque laborum magni molestias omnis possimus quisquam quo sint soluta tempore, vitae! Atque consequatur culpa cupiditate dolorum ducimus esse ex explicabo, facilis hic impedit incidunt laborum maiores maxime minima nihil obcaecati odit omnis porro quaerat, quam, quisquam rerum similique sit unde voluptatibus. Aliquam aut culpa doloremque ea esse expedita fugiat fugit ipsa nemo numquam, obcaecati optio perferendis qui rerum sapiente sequi sit ullam voluptates? Assumenda at, atque eos esse et exercitationem hic in ipsa iusto molestias necessitatibus nesciunt nobis quo recusandae repellendus rerum voluptates!'
};
class App extends Component{
    render(){
        return(
            <Fragment>
                <Menu items={menuItems}/>
            </Fragment>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));
