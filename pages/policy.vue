<template>
  <div class="min-h-screen p-6">
    <header class="text-center mb-6">
      <h1 class="text-4xl font-bold text-gray-800">Company Policies</h1>
    </header>
    <main class="max-w-4xl mx-auto bg-white p-8 rounded-lg">
      <PolicySection title="LATE CANCELLATION / NO-SHOW POLICY" :content="lateCancellationPolicy" />
      <PolicySection title="LESSON DETAILS" :content="lessonDetailsPolicy" />
      <PolicySection title="ISSUE RESOLUTION" :content="issueResolutionPolicy" />
      <PolicySection title="WITHDRAWALS AND REFUNDS" :content="withdrawalsAndRefundsPolicy" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const lateCancellationPolicy = ref(`
Scheduled lessons may be changed as to time and/or place by notifying Check Driving School of the intended change at least twenty-four (24) hours in advance of the lesson. If a student cancels late or is otherwise unable to attend or does not show up for a scheduled lesson then the student will, at our discretion, be charged twenty ($20) dollars or else will forfeit the lesson time.
\nThis fee reflects the loss of earnings to the school and the instructor, as the lost time could have been better spent on the training of another student. If another student can be inserted into the time we reserved for you, then there will be no charge at all. Remember, there is NEVER a charge for lessons cancelled in a timely manner.
`)

const lessonDetailsPolicy = ref(`
Scheduled lessons may be changed as to time and/or place by notifying Check Driving School of the intended change at least twenty-four (24) hours in advance of the lesson. If a student cancels late or is otherwise unable to attend or does not show up for a scheduled lesson then the student will, at our discretion, be charged twenty ($20) dollars or else will forfeit the lesson time.

This fee reflects the loss of earnings to the school and the instructor, as the lost time could have been better spent on the training of another student. If another student can be inserted into the time we reserved for you, then there will be no charge at all. Remember, there is NEVER a charge for lessons cancelled in a timely manner.
`)

const issueResolutionPolicy = ref(`
What should the student do if there is some issue with the service our driving academy provides? Firstly, talk it over with your instructor. They are all trained professionals who know how to listen and whose job it is to make you as comfortable as possible while teaching you to be a good, safe driver. 
If that does not resolve the situation, then call us at Check Driving School and ask to speak to the Office Manager and we will do everything in our power to make things right for you. Lastly, if all else fails you can write a letter to the Manager, Driver Training and Assessment Standards, ICBC, 910 Government St., Victoria, B.C., V8W 3Y5.
`)

const withdrawalsAndRefundsPolicy = ref(`
All students will receive the driving time they have paid for or, in the case of a prepaid package of lessons, students can receive a refund of any unused in-car portion of their package (for in-car lessons not yet received) by notifying Check Driving School of the intention to withdraw from all remaining lessons. 
The student will be charged the regular single lesson rate (see Pricing) only for the in-car lessons already taught.`)
</script>
