/**
 * Dashboard / Progress Page
 * Personal progress and insights
 */

import { Card, Button } from '@components/index'

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-bg-default p-4">
      <div className="container mx-auto max-w-4xl py-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-12 animate-fade-in">
          Your Progress Journey
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Modules Completed */}
          <Card className="text-center">
            <div className="text-5xl font-bold text-primary-500 mb-2">8</div>
            <p className="text-lg font-semibold text-primary-900">Modules Completed</p>
            <p className="text-sm text-secondary mt-2">Keep exploring! 🌱</p>
          </Card>

          {/* Current Streak */}
          <Card className="text-center">
            <div className="text-5xl font-bold text-accent-500 mb-2">12</div>
            <p className="text-lg font-semibold text-primary-900">Day Streak</p>
            <p className="text-sm text-secondary mt-2">You're building momentum!</p>
          </Card>

          {/* Understanding Score */}
          <Card className="text-center">
            <div className="text-5xl font-bold text-secondary-500 mb-2">78%</div>
            <p className="text-lg font-semibold text-primary-900">Understanding</p>
            <p className="text-sm text-secondary mt-2">Growing stronger each day</p>
          </Card>
        </div>

        {/* Insights */}
        <Card className="bg-primary-50 mb-12">
          <h2 className="text-2xl font-semibold text-primary-900 mb-6">
            You're Improving In...
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✨</span>
              <div>
                <p className="font-semibold text-primary-900">Meal Consistency</p>
                <p className="text-secondary text-sm">
                  You've been choosing balanced meals 85% more often this month
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧠</span>
              <div>
                <p className="font-semibold text-primary-900">Glucose Understanding</p>
                <p className="text-secondary text-sm">
                  Your knowledge about blood sugar management has improved significantly
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚶</span>
              <div>
                <p className="font-semibold text-primary-900">Daily Movement</p>
                <p className="text-secondary text-sm">
                  You've moved your body 10+ more times this month. Keep it up!
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Motivational Message */}
        <Card className="bg-gradient-to-r from-primary-100 to-accent-100 mb-12 text-center">
          <p className="text-xl font-semibold text-primary-900 mb-2">
            Small Steps Are Changing Your Long-Term Health
          </p>
          <p className="text-secondary">
            You're not just tracking progress. You're building a healthier, happier life. 🌿
          </p>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            Continue Learning
          </Button>
          <Button variant="secondary" size="lg">
            Update Today's Activity
          </Button>
        </div>
      </div>
    </main>
  )
}
