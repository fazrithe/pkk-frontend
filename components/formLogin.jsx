function FormLogin({ props }) {
  const {
    onSubmitHandler,
    onChangeHandler,
    loading,
    stateFormData,
    stateFormError,
    stateFormMessage,
  } = props;

  return (
    <form className="box" method="POST" onSubmit={onSubmitHandler}>
      <div className="form-group">
        <h2>Login</h2>
        <hr />
        {stateFormMessage.status === 'error' && (
          <h4 className="warning text-center">{stateFormMessage.error}</h4>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className="input"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChangeHandler}
          readOnly={loading && true}
          value={stateFormData.email.value}
        />
        {stateFormError.email && (
          <span className="warning">{stateFormError.email.hint}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="input"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChangeHandler}
          readOnly={loading && true}
          value={stateFormData.email.password}
        />
        {stateFormError.password && (
          <span className="warning">{stateFormError.password.hint}</span>
        )}
      </div>
      <div className="field mt-5">
        <button
          type="submit"
          className="button is-info is-fullwidth"
          disabled={loading}
        >
          {!loading ? 'Login' : 'Loading...'}
        </button>
      </div>
      <div className="field mt-5">
        <a href="/auth/register">Register</a>
      </div>
    </form>
  );
}
export default FormLogin;
