import React, { useEffect } from 'react';
import CommonTable from '../CommonTable';
import Row from '../Row';
import { getAllPost, getAllUser } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
 
const PostList = () => {
  // const [ dataList, setDataList ] = useState([]);
  const dispatch = useDispatch();
  const _postList = useSelector(state => state.user.postList);
  const _userList = useSelector(state => state.user.userList);

 
  useEffect(() => {
    // setDataList(_postList);
    dispatch(getAllUser());
    dispatch(getAllPost());
    console.log(_userList);
    if (_postList) console.log('t');
    console.log('postList : ' + _postList);
  }, [ ])
  return (
    <>
      <CommonTable headersName={['','글번호', '제목(댓글수)','좋아요','작성자', '작성 시간', '조회수']}>
        {
          _postList ? _postList.map((char, index) => {
            return (
              <Row key={index} postNO={char[1]} title={char[2]} no_comments={char[3]} likes={char[4]} userID={char[5]} created_date={char[6]} views={char[7]} />
            )
          }) : ''
        }
      </CommonTable>
    </>
  )
}
 
export default PostList;