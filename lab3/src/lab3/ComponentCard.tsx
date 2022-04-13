
import { Card } from 'antd';

export const ComponentCard = ({title, description} : {title: string, description: string}) =>{
    return(


        <div className="site-card-border-less-wrapper">
            <Card title={ title } bordered={false} style={{ width: 400 }} hoverable={true}>
            {description}
            </Card>
        </div>
    
    )
}