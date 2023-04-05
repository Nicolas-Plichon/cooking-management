interface RecipeProps {
  steps: string[]
}

function Recipe({ steps }: RecipeProps) {
  return (
    <div>
      {steps.map((step, index) => (
        <div
          key={step}
        >
          <p>{`Etape ${index + 1}`}</p>
          <p>
            {step}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Recipe;
