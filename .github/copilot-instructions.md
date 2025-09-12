# AI Rules for AUO-WDS_VUE

## CODING_PRACTICES

### Guidelines for SUPPORT_LEVEL

#### SUPPORT_EXPERT

- Favor elegant, maintainable solutions over verbose code. Assume understanding of language idioms and design patterns.
- Highlight potential performance implications and optimization opportunities in suggested code.
- Frame solutions within broader architectural contexts and suggest design alternatives when appropriate.
- Focus comments on 'why' not 'what' - assume code readability through well-named functions and variables.
- Proactively address edge cases, race conditions, and security considerations without being prompted.
- When debugging, provide targeted diagnostic approaches rather than shotgun solutions.
- Suggest comprehensive testing strategies rather than just example tests, including considerations for mocking, test organization, and coverage.

## FRONTEND

### Guidelines for VUE

#### VUE_CODING_STANDARDS

- Use the Composition API instead of the Options API for better type inference and code reuse
- Implement <script setup> for more concise component definitions
- Use Suspense and async components for handling loading states during code-splitting
- Leverage the defineProps and defineEmits macros for type-safe props and events
- Use the new defineOptions for additional component options
- Implement provide/inject for dependency injection instead of prop drilling in deeply nested components
- Use the Teleport component for portal-like functionality to render UI elsewhere in the DOM
- Leverage ref over reactive for primitive values to avoid unintended unwrapping
- Use v-memo for performance optimization in render-heavy list rendering scenarios
- Implement shallow refs for large objects that don't need deep reactivity

## FRONTEND

### Guidelines for VUE

#### VUEX

- Migrate to Pinia instead of Vuex for Vue 3 projects as it provides better TypeScript support
- If using Vuex, implement modules pattern to organize related state, getters, mutations, and actions
- Use namespaced modules to avoid naming conflicts in larger applications
- Leverage plugins for cross-cutting concerns like persistence or analytics
- Avoid direct state mutations outside of mutations to maintain predictable state changes
- Use mapState, mapGetters, and mapActions helpers to simplify component code
- Implement Vuex with the composition API using useStore for better TypeScript support
- Use actions for async operations and mutations for synchronous state changes
- Leverage getters for computed state to avoid redundant calculations
- Implement proper error handling in actions with try/catch blocks

## FRONTEND

### Guidelines for VUE

#### VUE_ROUTER

- Use route guards (beforeEach, beforeEnter) for authentication and authorization checks
- Implement lazy loading with dynamic imports for route components to improve performance
- Use named routes instead of hardcoded paths for better maintainability
- Leverage route meta fields to store additional route information like permissions or layout data
- Implement scroll behavior options to control scrolling between route navigations
- Use navigation duplicates handling to prevent redundant navigation to the current route
- Implement the composition API useRouter and useRoute hooks instead of this.$router
- Use nested routes for complex UIs with parent-child relationships
- Leverage route params validation with sensitive: true for parameters that shouldn't be logged
- Implement dynamic route matching with path parameters and regex patterns for flexible routing

## FRONTEND

### Guidelines for STYLING

#### TAILWIND

- Use the @layer directive to organize styles into components, utilities, and base layers
- Implement Just-in-Time (JIT) mode for development efficiency and smaller CSS bundles
- Use arbitrary values with square brackets (e.g., w-[123px]) for precise one-off designs
- Leverage the @apply directive in component classes to reuse utility combinations
- Implement the Tailwind configuration file for customizing theme, plugins, and variants
- Use component extraction for repeated UI patterns instead of copying utility classes
- Leverage the theme() function in CSS for accessing Tailwind theme values
- Implement dark mode with the dark: variant
- Use responsive variants (sm:, md:, lg:, etc.) for adaptive designs
- Leverage state variants (hover:, focus:, active:, etc.) for interactive elements

## FRONTEND

### Guidelines for STYLING

#### SCSS

- Use the ThemeProvider for consistent theming across components
- Implement the css helper for sharing styles between components
- Use props for conditional styling within template literals
- Leverage the createGlobalStyle for global styling
- Implement attrs method to pass HTML attributes to the underlying DOM elements
- Use the as prop for dynamic component rendering
- Leverage styled(Component) syntax for extending existing components
- Implement the css prop for one-off styling needs
- Use the & character for nesting selectors
- Leverage the keyframes helper for animations
