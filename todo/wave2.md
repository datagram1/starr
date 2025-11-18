# Wave 2: Design System & Components - Parallel Agent Execution

## Overview
Wave 2 focuses on building the design system foundation and component library. This includes design tokens, Tailwind configuration, shadcn/ui components, and custom components.

**Prerequisites:** Wave 1 must be completed and all branches merged to main.

---

## 🌊 Wave 2: Design System (8 Agents)

### Agent 7: Design Tokens & Tailwind Configuration
**Branch:** `feature/design-tokens`
**Status:** Start after Wave 1 completion

**Complete Instructions:**

You are creating the design token system and configuring Tailwind CSS with theme extensions.

**Steps:**

1. Pull latest main and create your branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/design-tokens
   cd frontend
   ```

2. Update `tailwind.config.js` with comprehensive theme:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     darkMode: ['class'],
     content: [
       './pages/**/*.{ts,tsx}',
       './components/**/*.{ts,tsx}',
       './app/**/*.{ts,tsx}',
       './src/**/*.{ts,tsx}',
     ],
     prefix: '',
     theme: {
       container: {
         center: true,
         padding: '2rem',
         screens: {
           '2xl': '1400px',
         },
       },
       extend: {
         colors: {
           border: 'hsl(var(--border))',
           input: 'hsl(var(--input))',
           ring: 'hsl(var(--ring))',
           background: 'hsl(var(--background))',
           foreground: 'hsl(var(--foreground))',
           primary: {
             DEFAULT: 'hsl(var(--primary))',
             foreground: 'hsl(var(--primary-foreground))',
           },
           secondary: {
             DEFAULT: 'hsl(var(--secondary))',
             foreground: 'hsl(var(--secondary-foreground))',
           },
           destructive: {
             DEFAULT: 'hsl(var(--destructive))',
             foreground: 'hsl(var(--destructive-foreground))',
           },
           muted: {
             DEFAULT: 'hsl(var(--muted))',
             foreground: 'hsl(var(--muted-foreground))',
           },
           accent: {
             DEFAULT: 'hsl(var(--accent))',
             foreground: 'hsl(var(--accent-foreground))',
           },
           popover: {
             DEFAULT: 'hsl(var(--popover))',
             foreground: 'hsl(var(--popover-foreground))',
           },
           card: {
             DEFAULT: 'hsl(var(--card))',
             foreground: 'hsl(var(--card-foreground))',
           },
         },
         borderRadius: {
           lg: 'var(--radius)',
           md: 'calc(var(--radius) - 2px)',
           sm: 'calc(var(--radius) - 4px)',
         },
         fontFamily: {
           sans: ['Inter', 'sans-serif'],
           mono: ['Fira Code', 'monospace'],
         },
         fontSize: {
           xs: ['0.75rem', { lineHeight: '1rem' }],
           sm: ['0.875rem', { lineHeight: '1.25rem' }],
           base: ['1rem', { lineHeight: '1.5rem' }],
           lg: ['1.125rem', { lineHeight: '1.75rem' }],
           xl: ['1.25rem', { lineHeight: '1.75rem' }],
           '2xl': ['1.5rem', { lineHeight: '2rem' }],
           '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
           '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
           '5xl': ['3rem', { lineHeight: '1' }],
         },
         spacing: {
           '128': '32rem',
           '144': '36rem',
         },
         keyframes: {
           'accordion-down': {
             from: { height: '0' },
             to: { height: 'var(--radix-accordion-content-height)' },
           },
           'accordion-up': {
             from: { height: 'var(--radix-accordion-content-height)' },
             to: { height: '0' },
           },
           'slide-in': {
             from: { transform: 'translateX(-100%)' },
             to: { transform: 'translateX(0)' },
           },
           'fade-in': {
             from: { opacity: '0' },
             to: { opacity: '1' },
           },
         },
         animation: {
           'accordion-down': 'accordion-down 0.2s ease-out',
           'accordion-up': 'accordion-up 0.2s ease-out',
           'slide-in': 'slide-in 0.3s ease-out',
           'fade-in': 'fade-in 0.2s ease-in',
         },
       },
     },
     plugins: [require('tailwindcss-animate')],
   }
   ```

3. Install tailwindcss-animate:
   ```bash
   npm install -D tailwindcss-animate
   ```

4. Create CSS variables file `src/styles/variables.css`:
   ```css
   @layer base {
     :root {
       --background: 0 0% 100%;
       --foreground: 222.2 84% 4.9%;
       --card: 0 0% 100%;
       --card-foreground: 222.2 84% 4.9%;
       --popover: 0 0% 100%;
       --popover-foreground: 222.2 84% 4.9%;
       --primary: 221.2 83.2% 53.3%;
       --primary-foreground: 210 40% 98%;
       --secondary: 210 40% 96.1%;
       --secondary-foreground: 222.2 47.4% 11.2%;
       --muted: 210 40% 96.1%;
       --muted-foreground: 215.4 16.3% 46.9%;
       --accent: 210 40% 96.1%;
       --accent-foreground: 222.2 47.4% 11.2%;
       --destructive: 0 84.2% 60.2%;
       --destructive-foreground: 210 40% 98%;
       --border: 214.3 31.8% 91.4%;
       --input: 214.3 31.8% 91.4%;
       --ring: 221.2 83.2% 53.3%;
       --radius: 0.5rem;
     }

     .dark {
       --background: 222.2 84% 4.9%;
       --foreground: 210 40% 98%;
       --card: 222.2 84% 4.9%;
       --card-foreground: 210 40% 98%;
       --popover: 222.2 84% 4.9%;
       --popover-foreground: 210 40% 98%;
       --primary: 217.2 91.2% 59.8%;
       --primary-foreground: 222.2 47.4% 11.2%;
       --secondary: 217.2 32.6% 17.5%;
       --secondary-foreground: 210 40% 98%;
       --muted: 217.2 32.6% 17.5%;
       --muted-foreground: 215 20.2% 65.1%;
       --accent: 217.2 32.6% 17.5%;
       --accent-foreground: 210 40% 98%;
       --destructive: 0 62.8% 30.6%;
       --destructive-foreground: 210 40% 98%;
       --border: 217.2 32.6% 17.5%;
       --input: 217.2 32.6% 17.5%;
       --ring: 224.3 76.3% 48%;
     }
   }
   ```

5. Import variables in `src/index.css` (add after Tailwind directives):
   ```css
   @import './styles/variables.css';
   ```

6. Create design tokens documentation `DESIGN_TOKENS.md`:
   ```markdown
   # Design Tokens

   ## Color Palette

   ### Light Theme
   - **Background**: White (#FFFFFF)
   - **Foreground**: Dark Blue (#0F172A)
   - **Primary**: Blue (#3B82F6)
   - **Secondary**: Gray (#F1F5F9)
   - **Accent**: Light Gray (#F1F5F9)
   - **Muted**: Light Gray (#64748B)
   - **Destructive**: Red (#EF4444)

   ### Dark Theme
   - **Background**: Dark Blue (#0F172A)
   - **Foreground**: White (#F8FAFC)
   - **Primary**: Light Blue (#60A5FA)
   - **Secondary**: Dark Gray (#1E293B)
   - **Accent**: Dark Gray (#1E293B)
   - **Muted**: Gray (#94A3B8)
   - **Destructive**: Dark Red (#991B1B)

   ## Typography

   ### Font Families
   - **Sans**: Inter (system fallback)
   - **Mono**: Fira Code (monospace fallback)

   ### Font Sizes
   - xs: 12px / 16px line height
   - sm: 14px / 20px line height
   - base: 16px / 24px line height
   - lg: 18px / 28px line height
   - xl: 20px / 28px line height
   - 2xl: 24px / 32px line height
   - 3xl: 30px / 36px line height
   - 4xl: 36px / 40px line height
   - 5xl: 48px / 1 line height

   ## Spacing

   Uses Tailwind's default spacing scale (0-96) plus:
   - 128: 32rem (512px)
   - 144: 36rem (576px)

   ## Border Radius

   - sm: calc(var(--radius) - 4px) = 4px
   - md: calc(var(--radius) - 2px) = 6px
   - lg: var(--radius) = 8px

   ## Responsive Breakpoints

   - sm: 640px
   - md: 768px
   - lg: 1024px
   - xl: 1280px
   - 2xl: 1400px (custom container max-width)

   ## Animations

   - **accordion-down**: Smooth accordion open (0.2s)
   - **accordion-up**: Smooth accordion close (0.2s)
   - **slide-in**: Slide from left (0.3s)
   - **fade-in**: Fade in (0.2s)

   ## Usage

   ### Colors
   ```tsx
   <div className="bg-primary text-primary-foreground">
     Primary button
   </div>
   ```

   ### Typography
   ```tsx
   <h1 className="text-4xl font-bold">Heading</h1>
   <p className="text-base text-muted-foreground">Body text</p>
   ```

   ### Spacing
   ```tsx
   <div className="p-4 m-2 space-y-4">Content</div>
   ```
   ```

7. Test Tailwind configuration:
   ```bash
   npm run dev
   ```
   - Verify app runs without errors
   - Check browser console for warnings

8. Commit and push:
   ```bash
   cd ..
   git add .
   git commit -m "feat: configure design tokens and Tailwind theme

   - Add comprehensive Tailwind theme configuration
   - Define color palette for light and dark themes
   - Configure typography scale with custom font sizes
   - Add spacing extensions (128, 144)
   - Define border radius tokens
   - Add custom animations (accordion, slide, fade)
   - Create CSS variables for theme switching
   - Document all design tokens

   🤖 Generated with [Claude Code](https://claude.com/claude-code)

   Co-Authored-By: Claude <noreply@anthropic.com>"

   git push origin feature/design-tokens
   ```

9. Create Pull Request

**Done!**

---

### Agent 8: shadcn/ui Components Group 1
**Branch:** `feature/shadcn-group-1`
**Status:** Start after Wave 1 completion

**Complete Instructions:**

You are installing the first group of shadcn/ui components: Button, Input, Select, Dialog, and Toast.

**Steps:**

1. Pull latest main and create your branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/shadcn-group-1
   cd frontend
   ```

2. Install Button component:
   ```bash
   npx shadcn-ui@latest add button
   ```

3. Install Input component:
   ```bash
   npx shadcn-ui@latest add input
   ```

4. Install Select component:
   ```bash
   npx shadcn-ui@latest add select
   ```

5. Install Dialog component:
   ```bash
   npx shadcn-ui@latest add dialog
   ```

6. Install Toast/Sonner component:
   ```bash
   npx shadcn-ui@latest add sonner
   ```

7. Create Storybook stories for Button `src/components/ui/button.stories.tsx`:
   ```typescript
   import type { Meta, StoryObj } from '@storybook/react';
   import { Button } from './button';

   const meta: Meta<typeof Button> = {
     title: 'UI/Button',
     component: Button,
     tags: ['autodocs'],
   };

   export default meta;
   type Story = StoryObj<typeof Button>;

   export const Default: Story = {
     args: {
       children: 'Button',
     },
   };

   export const Primary: Story = {
     args: {
       children: 'Primary Button',
       variant: 'default',
     },
   };

   export const Secondary: Story = {
     args: {
       children: 'Secondary Button',
       variant: 'secondary',
     },
   };

   export const Destructive: Story = {
     args: {
       children: 'Delete',
       variant: 'destructive',
     },
   };

   export const Outline: Story = {
     args: {
       children: 'Outline Button',
       variant: 'outline',
     },
   };

   export const Ghost: Story = {
     args: {
       children: 'Ghost Button',
       variant: 'ghost',
     },
   };

   export const Sizes: Story = {
     render: () => (
       <div className="flex gap-4 items-center">
         <Button size="sm">Small</Button>
         <Button size="default">Default</Button>
         <Button size="lg">Large</Button>
       </div>
     ),
   };
   ```

8. Create Storybook stories for Input `src/components/ui/input.stories.tsx`:
   ```typescript
   import type { Meta, StoryObj } from '@storybook/react';
   import { Input } from './input';

   const meta: Meta<typeof Input> = {
     title: 'UI/Input',
     component: Input,
     tags: ['autodocs'],
   };

   export default meta;
   type Story = StoryObj<typeof Input>;

   export const Default: Story = {
     args: {
       placeholder: 'Enter text...',
     },
   };

   export const WithValue: Story = {
     args: {
       value: 'Sample text',
     },
   };

   export const Disabled: Story = {
     args: {
       placeholder: 'Disabled input',
       disabled: true,
     },
   };

   export const Types: Story = {
     render: () => (
       <div className="space-y-4 max-w-md">
         <Input type="text" placeholder="Text input" />
         <Input type="email" placeholder="Email input" />
         <Input type="password" placeholder="Password input" />
         <Input type="number" placeholder="Number input" />
       </div>
     ),
   };
   ```

9. Create Storybook stories for Select `src/components/ui/select.stories.tsx`:
   ```typescript
   import type { Meta, StoryObj } from '@storybook/react';
   import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
   } from './select';

   const meta: Meta<typeof Select> = {
     title: 'UI/Select',
     component: Select,
     tags: ['autodocs'],
   };

   export default meta;
   type Story = StoryObj<typeof Select>;

   export const Default: Story = {
     render: () => (
       <Select>
         <SelectTrigger className="w-[180px]">
           <SelectValue placeholder="Select an option" />
         </SelectTrigger>
         <SelectContent>
           <SelectItem value="option1">Option 1</SelectItem>
           <SelectItem value="option2">Option 2</SelectItem>
           <SelectItem value="option3">Option 3</SelectItem>
         </SelectContent>
       </Select>
     ),
   };

   export const WithGroups: Story = {
     render: () => (
       <Select>
         <SelectTrigger className="w-[180px]">
           <SelectValue placeholder="Select fruit" />
         </SelectTrigger>
         <SelectContent>
           <SelectItem value="apple">Apple</SelectItem>
           <SelectItem value="banana">Banana</SelectItem>
           <SelectItem value="orange">Orange</SelectItem>
         </SelectContent>
       </Select>
     ),
   };
   ```

10. Create Storybook stories for Dialog `src/components/ui/dialog.stories.tsx`:
    ```typescript
    import type { Meta, StoryObj } from '@storybook/react';
    import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
    } from './dialog';
    import { Button } from './button';

    const meta: Meta<typeof Dialog> = {
      title: 'UI/Dialog',
      component: Dialog,
      tags: ['autodocs'],
    };

    export default meta;
    type Story = StoryObj<typeof Dialog>;

    export const Default: Story = {
      render: () => (
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>
                This is a dialog description. You can put any content here.
              </DialogDescription>
            </DialogHeader>
            <p>Dialog content goes here.</p>
          </DialogContent>
        </Dialog>
      ),
    };
    ```

11. Test all components in Storybook:
    ```bash
    npm run storybook
    ```
    - Verify all stories load without errors
    - Test light and dark themes (if theme switcher exists)
    - Test component interactions

12. Commit and push:
    ```bash
    cd ..
    git add .
    git commit -m "feat: add shadcn/ui components group 1

    - Install Button component with all variants
    - Install Input component with all types
    - Install Select component with dropdown
    - Install Dialog component for modals
    - Install Sonner/Toast for notifications
    - Create Storybook stories for all components
    - Test components in light and dark themes

    🤖 Generated with [Claude Code](https://claude.com/claude-code)

    Co-Authored-By: Claude <noreply@anthropic.com>"

    git push origin feature/shadcn-group-1
    ```

13. Create Pull Request

**Done!**

---

### Agent 9: shadcn/ui Components Group 2
**Branch:** `feature/shadcn-group-2`
**Status:** Start after Wave 1 completion

**Complete Instructions:**

You are installing the second group of shadcn/ui components: Card, Table, Tabs, Accordion, and Popover.

**Steps:**

1. Pull latest main and create your branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/shadcn-group-2
   cd frontend
   ```

2. Install Card component:
   ```bash
   npx shadcn-ui@latest add card
   ```

3. Install Table component:
   ```bash
   npx shadcn-ui@latest add table
   ```

4. Install Tabs component:
   ```bash
   npx shadcn-ui@latest add tabs
   ```

5. Install Accordion component:
   ```bash
   npx shadcn-ui@latest add accordion
   ```

6. Install Popover component:
   ```bash
   npx shadcn-ui@latest add popover
   ```

7. Create Storybook stories for Card `src/components/ui/card.stories.tsx`:
   ```typescript
   import type { Meta, StoryObj } from '@storybook/react';
   import {
     Card,
     CardContent,
     CardDescription,
     CardFooter,
     CardHeader,
     CardTitle,
   } from './card';
   import { Button } from './button';

   const meta: Meta<typeof Card> = {
     title: 'UI/Card',
     component: Card,
     tags: ['autodocs'],
   };

   export default meta;
   type Story = StoryObj<typeof Card>;

   export const Default: Story = {
     render: () => (
       <Card className="w-[350px]">
         <CardHeader>
           <CardTitle>Card Title</CardTitle>
           <CardDescription>Card description goes here</CardDescription>
         </CardHeader>
         <CardContent>
           <p>Card content with some information.</p>
         </CardContent>
         <CardFooter>
           <Button>Action</Button>
         </CardFooter>
       </Card>
     ),
   };

   export const WithoutFooter: Story = {
     render: () => (
       <Card className="w-[350px]">
         <CardHeader>
           <CardTitle>Simple Card</CardTitle>
           <CardDescription>No footer on this card</CardDescription>
         </CardHeader>
         <CardContent>
           <p>This card has no footer section.</p>
         </CardContent>
       </Card>
     ),
   };
   ```

8. Create Storybook stories for Table `src/components/ui/table.stories.tsx`:
   ```typescript
   import type { Meta, StoryObj } from '@storybook/react';
   import {
     Table,
     TableBody,
     TableCell,
     TableHead,
     TableHeader,
     TableRow,
   } from './table';

   const meta: Meta<typeof Table> = {
     title: 'UI/Table',
     component: Table,
     tags: ['autodocs'],
   };

   export default meta;
   type Story = StoryObj<typeof Table>;

   export const Default: Story = {
     render: () => (
       <Table>
         <TableHeader>
           <TableRow>
             <TableHead>Name</TableHead>
             <TableHead>Email</TableHead>
             <TableHead>Role</TableHead>
           </TableRow>
         </TableHeader>
         <TableBody>
           <TableRow>
             <TableCell>John Doe</TableCell>
             <TableCell>john@example.com</TableCell>
             <TableCell>Admin</TableCell>
           </TableRow>
           <TableRow>
             <TableCell>Jane Smith</TableCell>
             <TableCell>jane@example.com</TableCell>
             <TableCell>User</TableCell>
           </TableRow>
         </TableBody>
       </Table>
     ),
   };
   ```

9. Create Storybook stories for Tabs `src/components/ui/tabs.stories.tsx`:
   ```typescript
   import type { Meta, StoryObj } from '@storybook/react';
   import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

   const meta: Meta<typeof Tabs> = {
     title: 'UI/Tabs',
     component: Tabs,
     tags: ['autodocs'],
   };

   export default meta;
   type Story = StoryObj<typeof Tabs>;

   export const Default: Story = {
     render: () => (
       <Tabs defaultValue="tab1" className="w-[400px]">
         <TabsList>
           <TabsTrigger value="tab1">Tab 1</TabsTrigger>
           <TabsTrigger value="tab2">Tab 2</TabsTrigger>
           <TabsTrigger value="tab3">Tab 3</TabsTrigger>
         </TabsList>
         <TabsContent value="tab1">Content for Tab 1</TabsContent>
         <TabsContent value="tab2">Content for Tab 2</TabsContent>
         <TabsContent value="tab3">Content for Tab 3</TabsContent>
       </Tabs>
     ),
   };
   ```

10. Create Storybook stories for Accordion `src/components/ui/accordion.stories.tsx`:
    ```typescript
    import type { Meta, StoryObj } from '@storybook/react';
    import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    } from './accordion';

    const meta: Meta<typeof Accordion> = {
      title: 'UI/Accordion',
      component: Accordion,
      tags: ['autodocs'],
    };

    export default meta;
    type Story = StoryObj<typeof Accordion>;

    export const Default: Story = {
      render: () => (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>
              Content for section 1 goes here.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Section 2</AccordionTrigger>
            <AccordionContent>
              Content for section 2 goes here.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Section 3</AccordionTrigger>
            <AccordionContent>
              Content for section 3 goes here.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
    };
    ```

11. Create Storybook stories for Popover `src/components/ui/popover.stories.tsx`:
    ```typescript
    import type { Meta, StoryObj } from '@storybook/react';
    import { Popover, PopoverContent, PopoverTrigger } from './popover';
    import { Button } from './button';

    const meta: Meta<typeof Popover> = {
      title: 'UI/Popover',
      component: Popover,
      tags: ['autodocs'],
    };

    export default meta;
    type Story = StoryObj<typeof Popover>;

    export const Default: Story = {
      render: () => (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-sm">Popover content goes here.</p>
          </PopoverContent>
        </Popover>
      ),
    };
    ```

12. Test all components in Storybook:
    ```bash
    npm run storybook
    ```

13. Commit and push:
    ```bash
    cd ..
    git add .
    git commit -m "feat: add shadcn/ui components group 2

    - Install Card component with header/content/footer
    - Install Table component for data display
    - Install Tabs component for tabbed navigation
    - Install Accordion component for collapsible sections
    - Install Popover component for floating content
    - Create Storybook stories for all components
    - Test components in Storybook

    🤖 Generated with [Claude Code](https://claude.com/claude-code)

    Co-Authored-By: Claude <noreply@anthropic.com>"

    git push origin feature/shadcn-group-2
    ```

14. Create Pull Request

**Done!**

---

### Agent 10: shadcn/ui Components Group 3
**Branch:** `feature/shadcn-group-3`
**Status:** Start after Wave 1 completion

**Complete Instructions:**

You are installing the third group of shadcn/ui components: Tooltip, Badge, Avatar, and Skeleton.

**Steps:**

1. Pull latest main and create your branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/shadcn-group-3
   cd frontend
   ```

2. Install Tooltip component:
   ```bash
   npx shadcn-ui@latest add tooltip
   ```

3. Install Badge component:
   ```bash
   npx shadcn-ui@latest add badge
   ```

4. Install Avatar component:
   ```bash
   npx shadcn-ui@latest add avatar
   ```

5. Install Skeleton component:
   ```bash
   npx shadcn-ui@latest add skeleton
   ```

6. Create Storybook stories for Tooltip `src/components/ui/tooltip.stories.tsx`:
   ```typescript
   import type { Meta, StoryObj } from '@storybook/react';
   import {
     Tooltip,
     TooltipContent,
     TooltipProvider,
     TooltipTrigger,
   } from './tooltip';
   import { Button } from './button';

   const meta: Meta<typeof Tooltip> = {
     title: 'UI/Tooltip',
     component: Tooltip,
     tags: ['autodocs'],
   };

   export default meta;
   type Story = StoryObj<typeof Tooltip>;

   export const Default: Story = {
     render: () => (
       <TooltipProvider>
         <Tooltip>
           <TooltipTrigger asChild>
             <Button variant="outline">Hover me</Button>
           </TooltipTrigger>
           <TooltipContent>
             <p>This is a tooltip</p>
           </TooltipContent>
         </Tooltip>
       </TooltipProvider>
     ),
   };

   export const Multiple: Story = {
     render: () => (
       <TooltipProvider>
         <div className="flex gap-4">
           <Tooltip>
             <TooltipTrigger asChild>
               <Button>Top</Button>
             </TooltipTrigger>
             <TooltipContent side="top">
               <p>Tooltip on top</p>
             </TooltipContent>
           </Tooltip>
           <Tooltip>
             <TooltipTrigger asChild>
               <Button>Bottom</Button>
             </TooltipTrigger>
             <TooltipContent side="bottom">
               <p>Tooltip on bottom</p>
             </TooltipContent>
           </Tooltip>
         </div>
       </TooltipProvider>
     ),
   };
   ```

7. Create Storybook stories for Badge `src/components/ui/badge.stories.tsx`:
   ```typescript
   import type { Meta, StoryObj } from '@storybook/react';
   import { Badge } from './badge';

   const meta: Meta<typeof Badge> = {
     title: 'UI/Badge',
     component: Badge,
     tags: ['autodocs'],
   };

   export default meta;
   type Story = StoryObj<typeof Badge>;

   export const Default: Story = {
     args: {
       children: 'Badge',
     },
   };

   export const Variants: Story = {
     render: () => (
       <div className="flex gap-2">
         <Badge variant="default">Default</Badge>
         <Badge variant="secondary">Secondary</Badge>
         <Badge variant="destructive">Destructive</Badge>
         <Badge variant="outline">Outline</Badge>
       </div>
     ),
   };
   ```

8. Create Storybook stories for Avatar `src/components/ui/avatar.stories.tsx`:
   ```typescript
   import type { Meta, StoryObj } from '@storybook/react';
   import { Avatar, AvatarFallback, AvatarImage } from './avatar';

   const meta: Meta<typeof Avatar> = {
     title: 'UI/Avatar',
     component: Avatar,
     tags: ['autodocs'],
   };

   export default meta;
   type Story = StoryObj<typeof Avatar>;

   export const WithImage: Story = {
     render: () => (
       <Avatar>
         <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
         <AvatarFallback>CN</AvatarFallback>
       </Avatar>
     ),
   };

   export const WithFallback: Story = {
     render: () => (
       <Avatar>
         <AvatarFallback>JD</AvatarFallback>
       </Avatar>
     ),
   };

   export const Sizes: Story = {
     render: () => (
       <div className="flex gap-4 items-center">
         <Avatar className="h-8 w-8">
           <AvatarFallback>SM</AvatarFallback>
         </Avatar>
         <Avatar>
           <AvatarFallback>MD</AvatarFallback>
         </Avatar>
         <Avatar className="h-16 w-16">
           <AvatarFallback>LG</AvatarFallback>
         </Avatar>
       </div>
     ),
   };
   ```

9. Create Storybook stories for Skeleton `src/components/ui/skeleton.stories.tsx`:
   ```typescript
   import type { Meta, StoryObj } from '@storybook/react';
   import { Skeleton } from './skeleton';

   const meta: Meta<typeof Skeleton> = {
     title: 'UI/Skeleton',
     component: Skeleton,
     tags: ['autodocs'],
   };

   export default meta;
   type Story = StoryObj<typeof Skeleton>;

   export const Default: Story = {
     render: () => <Skeleton className="h-12 w-12 rounded-full" />,
   };

   export const Card: Story = {
     render: () => (
       <div className="flex flex-col space-y-3">
         <Skeleton className="h-[125px] w-[250px] rounded-xl" />
         <div className="space-y-2">
           <Skeleton className="h-4 w-[250px]" />
           <Skeleton className="h-4 w-[200px]" />
         </div>
       </div>
     ),
   };

   export const List: Story = {
     render: () => (
       <div className="space-y-2">
         <Skeleton className="h-4 w-full" />
         <Skeleton className="h-4 w-full" />
         <Skeleton className="h-4 w-3/4" />
       </div>
     ),
   };
   ```

10. Test all components in Storybook:
    ```bash
    npm run storybook
    ```

11. Commit and push:
    ```bash
    cd ..
    git add .
    git commit -m "feat: add shadcn/ui components group 3

    - Install Tooltip component for contextual help
    - Install Badge component for labels and status
    - Install Avatar component for user images
    - Install Skeleton component for loading states
    - Create Storybook stories for all components
    - Add examples of different sizes and variants
    - Test components in Storybook

    🤖 Generated with [Claude Code](https://claude.com/claude-code)

    Co-Authored-By: Claude <noreply@anthropic.com>"

    git push origin feature/shadcn-group-3
    ```

12. Create Pull Request

**Done!**

---

### Agent 11: Theme System Architecture
**Branch:** `feature/theme-system`
**Status:** Start after Wave 1 completion

**Complete Instructions:**

You are creating the theme system with context, provider, and theme switcher for light/dark modes.

**Steps:**

1. Pull latest main and create your branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/theme-system
   cd frontend
   ```

2. Create theme types `src/types/theme.ts`:
   ```typescript
   export type Theme = 'light' | 'dark' | 'system';

   export interface ThemeConfig {
     theme: Theme;
     setTheme: (theme: Theme) => void;
   }
   ```

3. Create theme context `src/contexts/ThemeContext.tsx`:
   ```typescript
   import { createContext, useContext, useEffect, useState } from 'react';
   import type { Theme, ThemeConfig } from '@/types/theme';

   const ThemeContext = createContext<ThemeConfig | undefined>(undefined);

   const THEME_STORAGE_KEY = 'starr-theme';

   export function ThemeProvider({ children }: { children: React.ReactNode }) {
     const [theme, setThemeState] = useState<Theme>(() => {
       const stored = localStorage.getItem(THEME_STORAGE_KEY);
       return (stored as Theme) || 'system';
     });

     useEffect(() => {
       const root = window.document.documentElement;
       root.classList.remove('light', 'dark');

       let effectiveTheme: 'light' | 'dark' = 'light';

       if (theme === 'system') {
         const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
           .matches
           ? 'dark'
           : 'light';
         effectiveTheme = systemTheme;
       } else {
         effectiveTheme = theme;
       }

       root.classList.add(effectiveTheme);
     }, [theme]);

     const setTheme = (newTheme: Theme) => {
       localStorage.setItem(THEME_STORAGE_KEY, newTheme);
       setThemeState(newTheme);
     };

     return (
       <ThemeContext.Provider value={{ theme, setTheme }}>
         {children}
       </ThemeContext.Provider>
     );
   }

   export function useTheme() {
     const context = useContext(ThemeContext);
     if (context === undefined) {
       throw new Error('useTheme must be used within a ThemeProvider');
     }
     return context;
   }
   ```

4. Create theme switcher component `src/components/ThemeSwitcher.tsx`:
   ```typescript
   import { Moon, Sun, Monitor } from 'lucide-react';
   import { Button } from '@/components/ui/button';
   import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuTrigger,
   } from '@/components/ui/dropdown-menu';
   import { useTheme } from '@/contexts/ThemeContext';

   export function ThemeSwitcher() {
     const { theme, setTheme } = useTheme();

     return (
       <DropdownMenu>
         <DropdownMenuTrigger asChild>
           <Button variant="ghost" size="icon">
             <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
             <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
             <span className="sr-only">Toggle theme</span>
           </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
           <DropdownMenuItem onClick={() => setTheme('light')}>
             <Sun className="mr-2 h-4 w-4" />
             <span>Light</span>
           </DropdownMenuItem>
           <DropdownMenuItem onClick={() => setTheme('dark')}>
             <Moon className="mr-2 h-4 w-4" />
             <span>Dark</span>
           </DropdownMenuItem>
           <DropdownMenuItem onClick={() => setTheme('system')}>
             <Monitor className="mr-2 h-4 w-4" />
             <span>System</span>
           </DropdownMenuItem>
         </DropdownMenuContent>
       </DropdownMenu>
     );
   }
   ```

5. Install dropdown-menu component if not already installed:
   ```bash
   npx shadcn-ui@latest add dropdown-menu
   ```

6. Update `src/main.tsx` to include ThemeProvider:
   ```typescript
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App.tsx';
   import './index.css';
   import { ThemeProvider } from './contexts/ThemeContext';

   ReactDOM.createRoot(document.getElementById('root')!).render(
     <React.StrictMode>
       <ThemeProvider>
         <App />
       </ThemeProvider>
     </React.StrictMode>
   );
   ```

7. Update `src/App.tsx` to demonstrate theme switcher:
   ```typescript
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

   export default App;
   ```

8. Create theme documentation `THEMING.md`:
   ```markdown
   # Theme System

   ## Overview

   The Starr frontend uses a theme system that supports light mode, dark mode, and system preference detection.

   ## Usage

   ### Basic Usage

   Wrap your app with the ThemeProvider:

   ```tsx
   import { ThemeProvider } from '@/contexts/ThemeContext';

   function App() {
     return (
       <ThemeProvider>
         {/* Your app */}
       </ThemeProvider>
     );
   }
   ```

   ### Using the Theme Hook

   ```tsx
   import { useTheme } from '@/contexts/ThemeContext';

   function MyComponent() {
     const { theme, setTheme } = useTheme();

     return (
       <button onClick={() => setTheme('dark')}>
         Current theme: {theme}
       </button>
     );
   }
   ```

   ### Theme Switcher Component

   Use the built-in ThemeSwitcher component:

   ```tsx
   import { ThemeSwitcher } from '@/components/ThemeSwitcher';

   function Navbar() {
     return (
       <nav>
         <ThemeSwitcher />
       </nav>
     );
   }
   ```

   ## Themes

   - **light**: Light mode with bright background
   - **dark**: Dark mode with dark background
   - **system**: Follows system preference

   ## Persistence

   Theme preference is automatically saved to localStorage and restored on page load.

   ## CSS Variables

   All colors use CSS variables defined in `src/styles/variables.css`. These variables automatically switch based on the current theme.
   ```

9. Test theme system:
   ```bash
   npm run dev
   ```
   - Click theme switcher
   - Verify light/dark/system modes work
   - Check localStorage persistence (reload page)

10. Commit and push:
    ```bash
    cd ..
    git add .
    git commit -m "feat: implement theme system with light/dark modes

    - Create theme context and provider
    - Add useTheme hook for theme access
    - Build ThemeSwitcher component with dropdown
    - Support light, dark, and system themes
    - Persist theme preference to localStorage
    - Add theme system documentation
    - Integrate with Tailwind dark mode
    - Demo theme switcher in App

    🤖 Generated with [Claude Code](https://claude.com/claude-code)

    Co-Authored-By: Claude <noreply@anthropic.com>"

    git push origin feature/theme-system
    ```

11. Create Pull Request

**Done!**

---

### Agent 12: Layout Components
**Branch:** `feature/layout-components`
**Status:** Start after Wave 1 completion

**Complete Instructions:**

You are creating custom layout components: Container, Grid, Stack, and Flex.

**Steps:**

1. Pull latest main and create your branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/layout-components
   cd frontend
   ```

2. Create layout directory:
   ```bash
   mkdir -p src/components/layout
   ```

3. Create Container component `src/components/layout/Container.tsx`:
   ```typescript
   import { cn } from '@/lib/utils';

   interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
     children: React.ReactNode;
     maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
   }

   const maxWidthClasses = {
     sm: 'max-w-screen-sm',
     md: 'max-w-screen-md',
     lg: 'max-w-screen-lg',
     xl: 'max-w-screen-xl',
     '2xl': 'max-w-screen-2xl',
     full: 'max-w-full',
   };

   export function Container({
     children,
     maxWidth = 'xl',
     className,
     ...props
   }: ContainerProps) {
     return (
       <div
         className={cn(
           'mx-auto px-4 sm:px-6 lg:px-8',
           maxWidthClasses[maxWidth],
           className
         )}
         {...props}
       >
         {children}
       </div>
     );
   }
   ```

4. Create Grid component `src/components/layout/Grid.tsx`:
   ```typescript
   import { cn } from '@/lib/utils';

   interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
     children: React.ReactNode;
     cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
     gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8;
   }

   const colClasses = {
     1: 'grid-cols-1',
     2: 'grid-cols-1 md:grid-cols-2',
     3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
     4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
     5: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5',
     6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
     12: 'grid-cols-12',
   };

   const gapClasses = {
     0: 'gap-0',
     1: 'gap-1',
     2: 'gap-2',
     3: 'gap-3',
     4: 'gap-4',
     5: 'gap-5',
     6: 'gap-6',
     8: 'gap-8',
   };

   export function Grid({
     children,
     cols = 1,
     gap = 4,
     className,
     ...props
   }: GridProps) {
     return (
       <div
         className={cn('grid', colClasses[cols], gapClasses[gap], className)}
         {...props}
       >
         {children}
       </div>
     );
   }
   ```

5. Create Stack component `src/components/layout/Stack.tsx`:
   ```typescript
   import { cn } from '@/lib/utils';

   interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
     children: React.ReactNode;
     spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8;
     align?: 'start' | 'center' | 'end' | 'stretch';
   }

   const spacingClasses = {
     0: 'space-y-0',
     1: 'space-y-1',
     2: 'space-y-2',
     3: 'space-y-3',
     4: 'space-y-4',
     5: 'space-y-5',
     6: 'space-y-6',
     8: 'space-y-8',
   };

   const alignClasses = {
     start: 'items-start',
     center: 'items-center',
     end: 'items-end',
     stretch: 'items-stretch',
   };

   export function Stack({
     children,
     spacing = 4,
     align = 'stretch',
     className,
     ...props
   }: StackProps) {
     return (
       <div
         className={cn(
           'flex flex-col',
           spacingClasses[spacing],
           alignClasses[align],
           className
         )}
         {...props}
       >
         {children}
       </div>
     );
   }
   ```

6. Create Flex component `src/components/layout/Flex.tsx`:
   ```typescript
   import { cn } from '@/lib/utils';

   interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
     children: React.ReactNode;
     direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
     justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
     align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
     gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8;
     wrap?: boolean;
   }

   const directionClasses = {
     row: 'flex-row',
     column: 'flex-col',
     'row-reverse': 'flex-row-reverse',
     'column-reverse': 'flex-col-reverse',
   };

   const justifyClasses = {
     start: 'justify-start',
     center: 'justify-center',
     end: 'justify-end',
     between: 'justify-between',
     around: 'justify-around',
     evenly: 'justify-evenly',
   };

   const alignClasses = {
     start: 'items-start',
     center: 'items-center',
     end: 'items-end',
     stretch: 'items-stretch',
     baseline: 'items-baseline',
   };

   const gapClasses = {
     0: 'gap-0',
     1: 'gap-1',
     2: 'gap-2',
     3: 'gap-3',
     4: 'gap-4',
     5: 'gap-5',
     6: 'gap-6',
     8: 'gap-8',
   };

   export function Flex({
     children,
     direction = 'row',
     justify = 'start',
     align = 'stretch',
     gap = 0,
     wrap = false,
     className,
     ...props
   }: FlexProps) {
     return (
       <div
         className={cn(
           'flex',
           directionClasses[direction],
           justifyClasses[justify],
           alignClasses[align],
           gapClasses[gap],
           wrap && 'flex-wrap',
           className
         )}
         {...props}
       >
         {children}
       </div>
     );
   }
   ```

7. Export all components `src/components/layout/index.ts`:
   ```typescript
   export { Container } from './Container';
   export { Grid } from './Grid';
   export { Stack } from './Stack';
   export { Flex } from './Flex';
   ```

8. Create Storybook stories `src/components/layout/Layout.stories.tsx`:
   ```typescript
   import type { Meta, StoryObj } from '@storybook/react';
   import { Container, Grid, Stack, Flex } from './index';
   import { Card } from '@/components/ui/card';

   const meta: Meta = {
     title: 'Layout/Components',
   };

   export default meta;

   export const ContainerDemo: StoryObj = {
     render: () => (
       <Container maxWidth="lg" className="bg-secondary p-4">
         <p>Container with max-width lg</p>
       </Container>
     ),
   };

   export const GridDemo: StoryObj = {
     render: () => (
       <Grid cols={3} gap={4}>
         <Card className="p-4">Item 1</Card>
         <Card className="p-4">Item 2</Card>
         <Card className="p-4">Item 3</Card>
         <Card className="p-4">Item 4</Card>
         <Card className="p-4">Item 5</Card>
         <Card className="p-4">Item 6</Card>
       </Grid>
     ),
   };

   export const StackDemo: StoryObj = {
     render: () => (
       <Stack spacing={4}>
         <Card className="p-4">Item 1</Card>
         <Card className="p-4">Item 2</Card>
         <Card className="p-4">Item 3</Card>
       </Stack>
     ),
   };

   export const FlexDemo: StoryObj = {
     render: () => (
       <Flex justify="between" align="center" gap={4}>
         <Card className="p-4">Left</Card>
         <Card className="p-4">Center</Card>
         <Card className="p-4">Right</Card>
       </Flex>
     ),
   };
   ```

9. Test components in Storybook:
   ```bash
   npm run storybook
   ```

10. Commit and push:
    ```bash
    cd ..
    git add .
    git commit -m "feat: create custom layout components

    - Add Container component with responsive max-widths
    - Add Grid component with responsive columns
    - Add Stack component for vertical layouts
    - Add Flex component for flexible layouts
    - Export all layout components from index
    - Create Storybook stories with examples
    - Test components in Storybook

    🤖 Generated with [Claude Code](https://claude.com/claude-code)

    Co-Authored-By: Claude <noreply@anthropic.com>"

    git push origin feature/layout-components
    ```

11. Create Pull Request

**Done!**

---

### Agent 13: Form Components
**Branch:** `feature/form-components`
**Status:** Start after Wave 1 completion

**Complete Instructions:**

You are creating form wrapper components that integrate with React Hook Form.

**Steps:**

1. Pull latest main and create your branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/form-components
   cd frontend
   ```

2. Install form component from shadcn:
   ```bash
   npx shadcn-ui@latest add form
   npx shadcn-ui@latest add label
   ```

3. Create form directory:
   ```bash
   mkdir -p src/components/form
   ```

4. Create FormField wrapper `src/components/form/FormField.tsx`:
   ```typescript
   import { cn } from '@/lib/utils';
   import { Label } from '@/components/ui/label';

   interface FormFieldProps {
     label?: string;
     error?: string;
     required?: boolean;
     helpText?: string;
     children: React.ReactNode;
     className?: string;
   }

   export function FormField({
     label,
     error,
     required,
     helpText,
     children,
     className,
   }: FormFieldProps) {
     return (
       <div className={cn('space-y-2', className)}>
         {label && (
           <Label>
             {label}
             {required && <span className="text-destructive ml-1">*</span>}
           </Label>
         )}
         {children}
         {helpText && !error && (
           <p className="text-sm text-muted-foreground">{helpText}</p>
         )}
         {error && <p className="text-sm text-destructive">{error}</p>}
       </div>
     );
   }
   ```

5. Create FormGroup `src/components/form/FormGroup.tsx`:
   ```typescript
   import { cn } from '@/lib/utils';

   interface FormGroupProps {
     title?: string;
     description?: string;
     children: React.ReactNode;
     className?: string;
   }

   export function FormGroup({
     title,
     description,
     children,
     className,
   }: FormGroupProps) {
     return (
       <div className={cn('space-y-4', className)}>
         {(title || description) && (
           <div className="space-y-1">
             {title && <h3 className="text-lg font-medium">{title}</h3>}
             {description && (
               <p className="text-sm text-muted-foreground">{description}</p>
             )}
           </div>
         )}
         <div className="space-y-4">{children}</div>
       </div>
     );
   }
   ```

6. Create FormError component `src/components/form/FormError.tsx`:
   ```typescript
   import { AlertCircle } from 'lucide-react';
   import { cn } from '@/lib/utils';

   interface FormErrorProps {
     message?: string;
     className?: string;
   }

   export function FormError({ message, className }: FormErrorProps) {
     if (!message) return null;

     return (
       <div
         className={cn(
           'flex items-center gap-2 text-sm text-destructive',
           className
         )}
       >
         <AlertCircle className="h-4 w-4" />
         <span>{message}</span>
       </div>
     );
   }
   ```

7. Create FormHelperText `src/components/form/FormHelperText.tsx`:
   ```typescript
   import { cn } from '@/lib/utils';

   interface FormHelperTextProps {
     children: React.ReactNode;
     className?: string;
   }

   export function FormHelperText({ children, className }: FormHelperTextProps) {
     return (
       <p className={cn('text-sm text-muted-foreground', className)}>
         {children}
       </p>
     );
   }
   ```

8. Export all form components `src/components/form/index.ts`:
   ```typescript
   export { FormField } from './FormField';
   export { FormGroup } from './FormGroup';
   export { FormError } from './FormError';
   export { FormHelperText } from './FormHelperText';
   ```

9. Create demo form with React Hook Form `src/components/form/DemoForm.tsx`:
   ```typescript
   import { useForm } from 'react-hook-form';
   import { zodResolver } from '@hookform/resolvers/zod';
   import * as z from 'zod';
   import { FormField, FormGroup } from './index';
   import { Input } from '@/components/ui/input';
   import { Button } from '@/components/ui/button';

   const formSchema = z.object({
     name: z.string().min(2, 'Name must be at least 2 characters'),
     email: z.string().email('Invalid email address'),
     age: z.number().min(18, 'Must be at least 18 years old'),
   });

   type FormData = z.infer<typeof formSchema>;

   export function DemoForm() {
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm<FormData>({
       resolver: zodResolver(formSchema),
     });

     const onSubmit = (data: FormData) => {
       console.log('Form submitted:', data);
       alert('Form submitted! Check console for data.');
     };

     return (
       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md">
         <FormGroup title="Personal Information" description="Enter your details">
           <FormField
             label="Name"
             required
             error={errors.name?.message}
             helpText="Your full name"
           >
             <Input {...register('name')} placeholder="John Doe" />
           </FormField>

           <FormField
             label="Email"
             required
             error={errors.email?.message}
             helpText="We'll never share your email"
           >
             <Input
               {...register('email')}
               type="email"
               placeholder="john@example.com"
             />
           </FormField>

           <FormField label="Age" required error={errors.age?.message}>
             <Input
               {...register('age', { valueAsNumber: true })}
               type="number"
               placeholder="25"
             />
           </FormField>
         </FormGroup>

         <Button type="submit">Submit</Button>
       </form>
     );
   }
   ```

10. Create Storybook stories `src/components/form/Form.stories.tsx`:
    ```typescript
    import type { Meta, StoryObj } from '@storybook/react';
    import { FormField, FormGroup, FormError, FormHelperText } from './index';
    import { DemoForm } from './DemoForm';
    import { Input } from '@/components/ui/input';

    const meta: Meta = {
      title: 'Form/Components',
    };

    export default meta;

    export const FieldWithLabel: StoryObj = {
      render: () => (
        <FormField label="Email" required>
          <Input type="email" placeholder="Enter your email" />
        </FormField>
      ),
    };

    export const FieldWithError: StoryObj = {
      render: () => (
        <FormField label="Password" error="Password must be at least 8 characters">
          <Input type="password" />
        </FormField>
      ),
    };

    export const FieldWithHelp: StoryObj = {
      render: () => (
        <FormField
          label="Username"
          helpText="This will be your public display name"
        >
          <Input placeholder="johndoe" />
        </FormField>
      ),
    };

    export const GroupDemo: StoryObj = {
      render: () => (
        <FormGroup
          title="Account Settings"
          description="Manage your account information"
        >
          <FormField label="Name">
            <Input placeholder="Your name" />
          </FormField>
          <FormField label="Email">
            <Input type="email" placeholder="Your email" />
          </FormField>
        </FormGroup>
      ),
    };

    export const CompleteForm: StoryObj = {
      render: () => <DemoForm />,
    };
    ```

11. Test in Storybook:
    ```bash
    npm run storybook
    ```

12. Commit and push:
    ```bash
    cd ..
    git add .
    git commit -m "feat: create form components with React Hook Form

    - Add FormField wrapper with label and error handling
    - Add FormGroup for grouping related fields
    - Add FormError component with icon
    - Add FormHelperText for field descriptions
    - Integrate with React Hook Form and Zod validation
    - Create demo form showing validation
    - Add Storybook stories for all components
    - Test form validation and submission

    🤖 Generated with [Claude Code](https://claude.com/claude-code)

    Co-Authored-By: Claude <noreply@anthropic.com>"

    git push origin feature/form-components
    ```

13. Create Pull Request

**Done!**

---

### Agent 14: State & Icon Components
**Branch:** `feature/state-icon-components`
**Status:** Start after Wave 1 completion

**Complete Instructions:**

You are creating loading states, empty states, error components, and icon system.

**Steps:**

1. Pull latest main and create your branch:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/state-icon-components
   cd frontend
   ```

2. Create state components directory:
   ```bash
   mkdir -p src/components/state
   ```

3. Create LoadingSpinner `src/components/state/LoadingSpinner.tsx`:
   ```typescript
   import { Loader2 } from 'lucide-react';
   import { cn } from '@/lib/utils';

   interface LoadingSpinnerProps {
     size?: 'sm' | 'md' | 'lg';
     className?: string;
   }

   const sizeClasses = {
     sm: 'h-4 w-4',
     md: 'h-8 w-8',
     lg: 'h-12 w-12',
   };

   export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
     return (
       <Loader2
         className={cn('animate-spin text-primary', sizeClasses[size], className)}
       />
     );
   }
   ```

4. Create LoadingSkeleton `src/components/state/LoadingSkeleton.tsx`:
   ```typescript
   import { Skeleton } from '@/components/ui/skeleton';

   export function LoadingSkeleton() {
     return (
       <div className="space-y-4">
         <Skeleton className="h-12 w-full" />
         <Skeleton className="h-12 w-full" />
         <Skeleton className="h-12 w-3/4" />
       </div>
     );
   }

   export function CardSkeleton() {
     return (
       <div className="rounded-lg border p-4 space-y-3">
         <Skeleton className="h-4 w-1/2" />
         <Skeleton className="h-20 w-full" />
         <div className="flex gap-2">
           <Skeleton className="h-8 w-20" />
           <Skeleton className="h-8 w-20" />
         </div>
       </div>
     );
   }
   ```

5. Create EmptyState component `src/components/state/EmptyState.tsx`:
   ```typescript
   import { LucideIcon } from 'lucide-react';
   import { Button } from '@/components/ui/button';
   import { cn } from '@/lib/utils';

   interface EmptyStateProps {
     icon?: LucideIcon;
     title: string;
     description?: string;
     action?: {
       label: string;
       onClick: () => void;
     };
     className?: string;
   }

   export function EmptyState({
     icon: Icon,
     title,
     description,
     action,
     className,
   }: EmptyStateProps) {
     return (
       <div
         className={cn(
           'flex flex-col items-center justify-center text-center p-8',
           className
         )}
       >
         {Icon && (
           <div className="rounded-full bg-muted p-3 mb-4">
             <Icon className="h-6 w-6 text-muted-foreground" />
           </div>
         )}
         <h3 className="text-lg font-semibold mb-2">{title}</h3>
         {description && (
           <p className="text-sm text-muted-foreground mb-4 max-w-sm">
             {description}
           </p>
         )}
         {action && (
           <Button onClick={action.onClick} variant="default">
             {action.label}
           </Button>
         )}
       </div>
     );
   }
   ```

6. Create ErrorMessage component `src/components/state/ErrorMessage.tsx`:
   ```typescript
   import { AlertCircle, RefreshCw } from 'lucide-react';
   import { Button } from '@/components/ui/button';
   import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

   interface ErrorMessageProps {
     title?: string;
     message: string;
     onRetry?: () => void;
   }

   export function ErrorMessage({
     title = 'Error',
     message,
     onRetry,
   }: ErrorMessageProps) {
     return (
       <Alert variant="destructive">
         <AlertCircle className="h-4 w-4" />
         <AlertTitle>{title}</AlertTitle>
         <AlertDescription className="flex items-center justify-between">
           <span>{message}</span>
           {onRetry && (
             <Button
               variant="outline"
               size="sm"
               onClick={onRetry}
               className="ml-4"
             >
               <RefreshCw className="h-4 w-4 mr-2" />
               Retry
             </Button>
           )}
         </AlertDescription>
       </Alert>
     );
   }
   ```

7. Install alert component:
   ```bash
   npx shadcn-ui@latest add alert
   ```

8. Create ErrorBoundary `src/components/state/ErrorBoundary.tsx`:
   ```typescript
   import React from 'react';
   import { AlertTriangle } from 'lucide-react';
   import { Button } from '@/components/ui/button';

   interface Props {
     children: React.ReactNode;
     fallback?: React.ReactNode;
   }

   interface State {
     hasError: boolean;
     error?: Error;
   }

   export class ErrorBoundary extends React.Component<Props, State> {
     constructor(props: Props) {
       super(props);
       this.state = { hasError: false };
     }

     static getDerivedStateFromError(error: Error): State {
       return { hasError: true, error };
     }

     componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
       console.error('ErrorBoundary caught an error:', error, errorInfo);
     }

     render() {
       if (this.state.hasError) {
         if (this.props.fallback) {
           return this.props.fallback;
         }

         return (
           <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
             <div className="rounded-full bg-destructive/10 p-3 mb-4">
               <AlertTriangle className="h-8 w-8 text-destructive" />
             </div>
             <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
             <p className="text-muted-foreground mb-4 text-center max-w-md">
               {this.state.error?.message || 'An unexpected error occurred'}
             </p>
             <Button onClick={() => window.location.reload()}>
               Reload Page
             </Button>
           </div>
         );
       }

       return this.props.children;
     }
   }
   ```

9. Export all state components `src/components/state/index.ts`:
   ```typescript
   export { LoadingSpinner } from './LoadingSpinner';
   export { LoadingSkeleton, CardSkeleton } from './LoadingSkeleton';
   export { EmptyState } from './EmptyState';
   export { ErrorMessage } from './ErrorMessage';
   export { ErrorBoundary } from './ErrorBoundary';
   ```

10. Create icons export file `src/components/icons/index.ts`:
    ```typescript
    // Re-export commonly used icons from lucide-react
    export {
      Home,
      Settings,
      User,
      LogOut,
      Menu,
      X,
      Search,
      Plus,
      Edit,
      Trash,
      Save,
      Upload,
      Download,
      ChevronLeft,
      ChevronRight,
      ChevronDown,
      ChevronUp,
      Check,
      AlertCircle,
      AlertTriangle,
      Info,
      Bell,
      Mail,
      Calendar,
      Clock,
      Eye,
      EyeOff,
      Lock,
      Unlock,
      Copy,
      ExternalLink,
      FileText,
      Folder,
      Image,
      Loader2,
      MoreVertical,
      MoreHorizontal,
      RefreshCw,
      Sun,
      Moon,
      Star,
    } from 'lucide-react';
    ```

11. Create Storybook stories `src/components/state/State.stories.tsx`:
    ```typescript
    import type { Meta, StoryObj } from '@storybook/react';
    import {
      LoadingSpinner,
      LoadingSkeleton,
      CardSkeleton,
      EmptyState,
      ErrorMessage,
      ErrorBoundary,
    } from './index';
    import { Inbox } from 'lucide-react';

    const meta: Meta = {
      title: 'State/Components',
    };

    export default meta;

    export const SpinnerSizes: StoryObj = {
      render: () => (
        <div className="flex gap-8 items-center">
          <LoadingSpinner size="sm" />
          <LoadingSpinner size="md" />
          <LoadingSpinner size="lg" />
        </div>
      ),
    };

    export const SkeletonDemo: StoryObj = {
      render: () => <LoadingSkeleton />,
    };

    export const CardSkeletonDemo: StoryObj = {
      render: () => (
        <div className="grid grid-cols-2 gap-4 max-w-2xl">
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ),
    };

    export const EmptyDemo: StoryObj = {
      render: () => (
        <EmptyState
          icon={Inbox}
          title="No messages"
          description="You don't have any messages yet. Start a conversation to see them here."
          action={{
            label: 'New Message',
            onClick: () => alert('New message clicked'),
          }}
        />
      ),
    };

    export const ErrorDemo: StoryObj = {
      render: () => (
        <ErrorMessage
          message="Failed to load data from the server"
          onRetry={() => alert('Retry clicked')}
        />
      ),
    };

    export const ErrorBoundaryDemo: StoryObj = {
      render: () => (
        <ErrorBoundary>
          <p>This content is wrapped in an ErrorBoundary</p>
        </ErrorBoundary>
      ),
    };
    ```

12. Test in Storybook:
    ```bash
    npm run storybook
    ```

13. Commit and push:
    ```bash
    cd ..
    git add .
    git commit -m "feat: create state and icon components

    - Add LoadingSpinner with multiple sizes
    - Add LoadingSkeleton and CardSkeleton
    - Add EmptyState component with icon and action
    - Add ErrorMessage with retry button
    - Add ErrorBoundary for error handling
    - Create icons export for commonly used icons
    - Add Storybook stories for all components
    - Test all state variations

    🤖 Generated with [Claude Code](https://claude.com/claude-code)

    Co-Authored-By: Claude <noreply@anthropic.com>"

    git push origin feature/state-icon-components
    ```

14. Create Pull Request

**Done!**

---

## 📋 Wave 2 Progress Tracking

- [ ] Agent 7: Design Tokens & Tailwind Configuration
- [ ] Agent 8: shadcn/ui Components Group 1
- [ ] Agent 9: shadcn/ui Components Group 2
- [ ] Agent 10: shadcn/ui Components Group 3
- [ ] Agent 11: Theme System Architecture
- [ ] Agent 12: Layout Components
- [ ] Agent 13: Form Components
- [ ] Agent 14: State & Icon Components

---

## 📝 Next Steps After Wave 2

Once all Wave 2 agents complete:

1. All agents pull latest main
2. Verify frontend runs and Storybook works
3. Test theme switching
4. Verify all components work in light/dark modes
5. Begin Wave 3 (routing and navigation)

---

**Last Updated:** 2025-01-18
**Current Status:** Wave 2 - Design System & Components
**Next Wave:** Wave 3 - Routing & Navigation (to be created)
