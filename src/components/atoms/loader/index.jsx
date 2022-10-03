import "./loader-styles.scss";

const Loader = () => {
  return (
    <div className="loader-body">
      <div className="loader">
        <spin className="loader-child"></spin>
        <spin className="loader-child-2"></spin>
        <spin className="loader-child-3"></spin>
      </div>
    </div>
  );
};

export default Loader;
