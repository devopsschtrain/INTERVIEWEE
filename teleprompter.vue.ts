<template id="template_id">
  <div>
    <h1>Teleprompter</h1>
    <div v-html="notes" class="teleprompter"></div>
  </div>
</template>

<script>
export default {
  props: {
    topicId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      notes: ''
    };
  },
  created() {
    // Fetch topic details from the API
    this.fetchTopicDetail();
  },
  methods: {
    fetchTopicDetail() {
      const url = '/godidgroup/com/interview/assistant/api/interview_topics_new/view.jss';
      const param = {
        id: this.topicId
      };
      http.call(url, param, (data) => {
        if (data.code === 'success') {
          this.notes = data.data.notes;
        } else {
          app.error(data.msg);
        }
      });
    }
  }
};
</script>

<style>
.teleprompter {
  max-width: 600px;
  margin: 0 auto;
  font-size: 24px;
  line-height: 1.5;
  white-space: pre-line;
}
</style>
