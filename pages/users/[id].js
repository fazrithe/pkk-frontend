import Cookies from 'js-cookie';
import { formAddEdit } from '../../components/formAddEdit';
import { userService } from '../../services/user.service';

export default formAddEdit;

export async function getServerSideProps({ params }) {
    const user = await userService.getById(params.id);

    return {
        props: { user }
    }
}