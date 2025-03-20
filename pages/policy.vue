<template>
  <div class="min-h-screen p-6">
    <header class="text-center mb-6">
      <h1 class="text-4xl font-bold text-gray-800">Company Policy</h1>
    </header>
    <ol class="list-decimal marker:font-semibold marker:text-xl marker:text-gray-800">
      <li class="border-b border-gray-200 pb-4">
        <p>
          Fees:	$80.00 per hour, $100.00 per 1.5 hours, Car rental for road test $300.00
        </p>

        <ul class="list-none mt-1 ml-6 text-base">
          <li>
            Each Driving Lesson is a minimum of 1 hour.
          </li> 
          <li>
            Each Road Test Session is a minimum of 2 hours including 45 minute warm-up.
          </li>
          <li>
            Each Driving Lesson will have a minimum of 50 minutes practice time. 
          </li>
        </ul>
      </li>

      <li class="border-b border-gray-200 pb-4">
        <p>
          If you wish to cancel a driving lesson, we require 48 hours’ notice otherwise a cancellation fee of $40.00 will be assessed.  
        </p>
      </li>
      
      <li class="border-b border-gray-200 pb-4" style="counter-set: chapter-count 2;">
        <p>
          For <span class="font-bold">canceling</span> a road test appointment made by Check Driving School, we require 72 hours notice, as we must notify ICBC.  
          Failure to give sufficient notice may result in the student having to pay a $25 Road Test Cancellation Fee to ICBC.
        </p>
      </li>

      <li class="border-b border-gray-200 pb-4">
        <p>
          Payment must be made no later than the end of each driving lesson or road test session. There will be no refund for driving lessons or road test sessions that have taken place.
          If the student has pre-paid for driving lessons or a road test session, there will be no refund given in cases of insufficient notice of cancellation <span class="font-bold">(see 2 and 3 above)</span>.
        </p>
      </li>
      <li class="border-b border-gray-200 pb-4">
        <p>
          Students who request a refund for unused lessons in a pre-paid package will have completed lessons recalculated at the standard hourly rate (without the package discount). The refunded amount will be adjusted accordingly, ensuring fairness as the discount applies only when all lessons are used.
        </p>
      </li>

      <li class="border-b border-gray-200 pb-4">
        <p>
          Students must provide a valid BC Learners Drivers Licence or Drivers Licence, including foreign drivers’ licence before the first lesson. Students must always carry their licence during training.
        </p>
      </li>

      <li class="border-b border-gray-200 pb-4">
        <p>
          There will be a maximum of 3 people (1 observing) in the Check Driving School vehicle during the student’s lesson time.
        </p>
      </li>

      <li class="border-b border-gray-200 pb-4">
        <p>
          Road tests can be booked either by the student or by Check Driving School. The student must sign a consent and release form before Check Driving School may book a road test on their behalf. 
          Students must be in an active training program, taking driving lessons, within 7 days of a road test booked by Check Driving School, or 
          Check Driving School reserves the right to cancel any road test appointments it has made.  
        </p>
      </li>
      <li class="border-b border-gray-200 pb-4">
        <p>
          If a student wishes to use Check Drive's car for their road test, this must be discussed and confirmed with their instructor in advance to ensure availability and proper preparation.
        </p>
      </li>
      <li class="border-b border-gray-200 pb-4">
        <p>
          The instructor reserves the right to withhold the use of the vehicle for the road test if they determine the student is not yet prepared, prioritizing the safety of the student and others on the road.
        </p>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import PolicySection from '@/components/policySection.vue'

interface Policy {
  title: string
  content: string
}

const { data: policies } = await useFetch<Policy[]>('/policies.json', { server: false })
</script>
