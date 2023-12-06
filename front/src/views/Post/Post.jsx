import Form from "../../components/Form/Form";
import './Post.modules.css'


const Post = () => {
     

     return (
          <div className="post-master" style={{ display: 'flex', justifyContent: 'center' }}>
               <div>
                    <Form />
               </div>
          </div>
     );
}

export default Post;