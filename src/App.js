function App() {
	return (
		<div className="container">
			<div className="box">
				<div className="leftPane">
          <div className="item-lists">
            <div className="item">
              <div className="number">1</div>
              <div className="content">
                <div className="step">Step 1</div>
                <div className="desc">Sign In</div>
              </div>
            </div>

            <div className="item">
              <div className="number">2</div>
              <div className="content">
                <div className="step">Step 2</div>
                <div className="desc">Pin Extention</div>
              </div>
            </div>

            <div className="item active">
              <div className="number">3</div>
              <div className="content">
                <div className="step">Step 3</div>
                <div className="desc">Setup Finished</div>
              </div>
            </div>
          </div>
        </div>
				<div className="rightPane">
					<div className="headings">
						<h1>Setup Finished 🎉</h1>
						<p>You have completed this guide. </p>
						<p>
							Click the extension icon on the right side of the address
							bar to start using this tool.
						</p>
						<p>Or click the button below to get started right now!</p>
						<button>Try Recording Now</button>
					</div>
					<div className="image">
            <img src="pc.png" alt="" />
          </div>
				</div>
			</div>
		</div>
	);
}

export default App;
