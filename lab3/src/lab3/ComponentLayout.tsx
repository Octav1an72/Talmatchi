import { Layout, Menu, Breadcrumb } from 'antd';
import { ComponentCard } from './ComponentCard';
import { ComponentForm } from './ComponentForm';
import './stiluri.css';

const { Header, Content, Footer } = Layout;

const informatiiCard = [
    {
        id: 1,
        titlu: "Titlu1",
        descriere: "Descriere 1",
    },
    {
        id: 2,
        titlu: "Titlu2",
        descriere: "Descriere 2",
    },
    {
        id: 3,
        titlu: "Titlu3",
        descriere: "Descriere 3",
    },
    {
        id: 4,
        titlu: "Titlu4",
        descriere: "Descriere 4",
    },
    {
        id: 5,
        titlu: "Titlu5",
        descriere: "Descriere 5",
    },
    {
        id: 6,
        titlu: "Titlu6",
        descriere: "Descriere 6",
    },
]

export const ComponentLayout = () =>{
    return(

        <>
            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    {new Array(5).fill(null).map((_, index) => {
                    const key = index + 1;
                    return <Menu.Item key={key}>{`Meniu ${key}`}</Menu.Item>;
                    })}
                </Menu>
                </Header>
                <main>
                    <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content grid">
                       {
                           informatiiCard.map((el, index)=>{
                               return(
                                   <ComponentCard key={ el.id } title={ el.titlu } description={ el.descriere } />
                               )
                           })
                       } 
                    </div>

                    <br />

                    <div>

                       <ComponentForm />

                    </div>
                    </Content>
                </main>
                <Footer style={{ textAlign: 'center' }}>Adasan Cristi, CR-191</Footer>
            </Layout>
        </>

    )
}