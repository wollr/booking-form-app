import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { setComment } from '../../features/formSlice';
import classes from './CommentInput.module.css';

function CommentInput() {
  const dispatch = useDispatch();
  const { comment } = useSelector((state: RootState) => state.form);

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(setComment(event.target.value));
  };

  return (
    <textarea
      className={classes.comment_input}
      id="comment"
      required
      value={comment}
      onChange={handleCommentChange}
    />
  );
}

export default CommentInput;
