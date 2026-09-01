function Stats({ todos }) {
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <p>
      {completedCount} of {totalCount} tasks completed
    </p>
  );
}

export default Stats;