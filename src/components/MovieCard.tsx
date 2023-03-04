import React from 'react';

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="w-[240px] m-4">
      <div>
        <img src={movie.image} alt={movie.title} className="h-[400px]" />
      </div>

      <div>
        <p className="text-center">{movie.title}</p>
        <p className="text-center">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
