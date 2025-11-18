import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Starr</h1>
          <ThemeSwitcher />
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Theme System Demo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Click the theme switcher in the top right to toggle between light,
              dark, and system themes.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default App
