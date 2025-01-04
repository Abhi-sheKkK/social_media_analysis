import React from 'react';

const Header = () => {
  return (
    <header className="bg-purple1 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Socialize.ai</h1>
        <nav>
          <a href="/#how-it-works" className="px-4 hover:underline">How It Works</a>
          <a href="/#features" className="px-4 hover:underline">Features</a>
          <a href="/overview" className="px-4 hover:underline">Overview</a>
          <a href="/#about" className="px-4 hover:underline">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
