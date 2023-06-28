# `cloudflare_worker_script`

Refer to the Terraform Registory for docs: [`cloudflare_worker_script`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script).

# `workerScript` Submodule <a name="`workerScript` Submodule" id="@cdktf/provider-cloudflare.workerScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkerScript <a name="WorkerScript" id="@cdktf/provider-cloudflare.workerScript.WorkerScript"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script cloudflare_worker_script}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScript(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  content: str,
  name: str,
  analytics_engine_binding: typing.Union[IResolvable, typing.List[WorkerScriptAnalyticsEngineBinding]] = None,
  compatibility_date: str = None,
  compatibility_flags: typing.List[str] = None,
  id: str = None,
  kv_namespace_binding: typing.Union[IResolvable, typing.List[WorkerScriptKvNamespaceBinding]] = None,
  logpush: typing.Union[bool, IResolvable] = None,
  module: typing.Union[bool, IResolvable] = None,
  plain_text_binding: typing.Union[IResolvable, typing.List[WorkerScriptPlainTextBinding]] = None,
  queue_binding: typing.Union[IResolvable, typing.List[WorkerScriptQueueBinding]] = None,
  r2_bucket_binding: typing.Union[IResolvable, typing.List[WorkerScriptR2BucketBinding]] = None,
  secret_text_binding: typing.Union[IResolvable, typing.List[WorkerScriptSecretTextBinding]] = None,
  service_binding: typing.Union[IResolvable, typing.List[WorkerScriptServiceBinding]] = None,
  webassembly_binding: typing.Union[IResolvable, typing.List[WorkerScriptWebassemblyBinding]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.content">content</a></code> | <code>str</code> | The script content. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for the script. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.analyticsEngineBinding">analytics_engine_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>]]</code> | analytics_engine_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.compatibilityDate">compatibility_date</a></code> | <code>str</code> | The date to use for the compatibility flag. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | Compatibility flags used for Worker Scripts. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#id WorkerScript#id}. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.kvNamespaceBinding">kv_namespace_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>]]</code> | kv_namespace_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.logpush">logpush</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling allows Worker events to be sent to a defined Logpush destination. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.module">module</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to upload Worker as a module. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.plainTextBinding">plain_text_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>]]</code> | plain_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.queueBinding">queue_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>]]</code> | queue_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.r2BucketBinding">r2_bucket_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>]]</code> | r2_bucket_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.secretTextBinding">secret_text_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>]]</code> | secret_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.serviceBinding">service_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>]]</code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.webassemblyBinding">webassembly_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>]]</code> | webassembly_binding block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#account_id WorkerScript#account_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.content"></a>

- *Type:* str

The script content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#content WorkerScript#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.name"></a>

- *Type:* str

The name for the script. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `analytics_engine_binding`<sup>Optional</sup> <a name="analytics_engine_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.analyticsEngineBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>]]

analytics_engine_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#analytics_engine_binding WorkerScript#analytics_engine_binding}

---

##### `compatibility_date`<sup>Optional</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.compatibilityDate"></a>

- *Type:* str

The date to use for the compatibility flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#compatibility_date WorkerScript#compatibility_date}

---

##### `compatibility_flags`<sup>Optional</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.compatibilityFlags"></a>

- *Type:* typing.List[str]

Compatibility flags used for Worker Scripts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#compatibility_flags WorkerScript#compatibility_flags}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#id WorkerScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kv_namespace_binding`<sup>Optional</sup> <a name="kv_namespace_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.kvNamespaceBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>]]

kv_namespace_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#kv_namespace_binding WorkerScript#kv_namespace_binding}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.logpush"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling allows Worker events to be sent to a defined Logpush destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#logpush WorkerScript#logpush}

---

##### `module`<sup>Optional</sup> <a name="module" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.module"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to upload Worker as a module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#module WorkerScript#module}

---

##### `plain_text_binding`<sup>Optional</sup> <a name="plain_text_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.plainTextBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>]]

plain_text_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#plain_text_binding WorkerScript#plain_text_binding}

---

##### `queue_binding`<sup>Optional</sup> <a name="queue_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.queueBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>]]

queue_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#queue_binding WorkerScript#queue_binding}

---

##### `r2_bucket_binding`<sup>Optional</sup> <a name="r2_bucket_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.r2BucketBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>]]

r2_bucket_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#r2_bucket_binding WorkerScript#r2_bucket_binding}

---

##### `secret_text_binding`<sup>Optional</sup> <a name="secret_text_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.secretTextBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>]]

secret_text_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#secret_text_binding WorkerScript#secret_text_binding}

---

##### `service_binding`<sup>Optional</sup> <a name="service_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.serviceBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>]]

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#service_binding WorkerScript#service_binding}

---

##### `webassembly_binding`<sup>Optional</sup> <a name="webassembly_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.Initializer.parameter.webassemblyBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>]]

webassembly_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#webassembly_binding WorkerScript#webassembly_binding}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putAnalyticsEngineBinding">put_analytics_engine_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putKvNamespaceBinding">put_kv_namespace_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlainTextBinding">put_plain_text_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putQueueBinding">put_queue_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putR2BucketBinding">put_r2_bucket_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putSecretTextBinding">put_secret_text_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putServiceBinding">put_service_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.putWebassemblyBinding">put_webassembly_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetAnalyticsEngineBinding">reset_analytics_engine_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetCompatibilityDate">reset_compatibility_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetCompatibilityFlags">reset_compatibility_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetKvNamespaceBinding">reset_kv_namespace_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetLogpush">reset_logpush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetModule">reset_module</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetPlainTextBinding">reset_plain_text_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetQueueBinding">reset_queue_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetR2BucketBinding">reset_r2_bucket_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetSecretTextBinding">reset_secret_text_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetServiceBinding">reset_service_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.resetWebassemblyBinding">reset_webassembly_binding</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_analytics_engine_binding` <a name="put_analytics_engine_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putAnalyticsEngineBinding"></a>

```python
def put_analytics_engine_binding(
  value: typing.Union[IResolvable, typing.List[WorkerScriptAnalyticsEngineBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putAnalyticsEngineBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>]]

---

##### `put_kv_namespace_binding` <a name="put_kv_namespace_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putKvNamespaceBinding"></a>

```python
def put_kv_namespace_binding(
  value: typing.Union[IResolvable, typing.List[WorkerScriptKvNamespaceBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putKvNamespaceBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>]]

---

##### `put_plain_text_binding` <a name="put_plain_text_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlainTextBinding"></a>

```python
def put_plain_text_binding(
  value: typing.Union[IResolvable, typing.List[WorkerScriptPlainTextBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putPlainTextBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>]]

---

##### `put_queue_binding` <a name="put_queue_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putQueueBinding"></a>

```python
def put_queue_binding(
  value: typing.Union[IResolvable, typing.List[WorkerScriptQueueBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putQueueBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>]]

---

##### `put_r2_bucket_binding` <a name="put_r2_bucket_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putR2BucketBinding"></a>

```python
def put_r2_bucket_binding(
  value: typing.Union[IResolvable, typing.List[WorkerScriptR2BucketBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putR2BucketBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>]]

---

##### `put_secret_text_binding` <a name="put_secret_text_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putSecretTextBinding"></a>

```python
def put_secret_text_binding(
  value: typing.Union[IResolvable, typing.List[WorkerScriptSecretTextBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putSecretTextBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>]]

---

##### `put_service_binding` <a name="put_service_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putServiceBinding"></a>

```python
def put_service_binding(
  value: typing.Union[IResolvable, typing.List[WorkerScriptServiceBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putServiceBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>]]

---

##### `put_webassembly_binding` <a name="put_webassembly_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putWebassemblyBinding"></a>

```python
def put_webassembly_binding(
  value: typing.Union[IResolvable, typing.List[WorkerScriptWebassemblyBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.putWebassemblyBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>]]

---

##### `reset_analytics_engine_binding` <a name="reset_analytics_engine_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetAnalyticsEngineBinding"></a>

```python
def reset_analytics_engine_binding() -> None
```

##### `reset_compatibility_date` <a name="reset_compatibility_date" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetCompatibilityDate"></a>

```python
def reset_compatibility_date() -> None
```

##### `reset_compatibility_flags` <a name="reset_compatibility_flags" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetCompatibilityFlags"></a>

```python
def reset_compatibility_flags() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kv_namespace_binding` <a name="reset_kv_namespace_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetKvNamespaceBinding"></a>

```python
def reset_kv_namespace_binding() -> None
```

##### `reset_logpush` <a name="reset_logpush" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetLogpush"></a>

```python
def reset_logpush() -> None
```

##### `reset_module` <a name="reset_module" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetModule"></a>

```python
def reset_module() -> None
```

##### `reset_plain_text_binding` <a name="reset_plain_text_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetPlainTextBinding"></a>

```python
def reset_plain_text_binding() -> None
```

##### `reset_queue_binding` <a name="reset_queue_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetQueueBinding"></a>

```python
def reset_queue_binding() -> None
```

##### `reset_r2_bucket_binding` <a name="reset_r2_bucket_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetR2BucketBinding"></a>

```python
def reset_r2_bucket_binding() -> None
```

##### `reset_secret_text_binding` <a name="reset_secret_text_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetSecretTextBinding"></a>

```python
def reset_secret_text_binding() -> None
```

##### `reset_service_binding` <a name="reset_service_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetServiceBinding"></a>

```python
def reset_service_binding() -> None
```

##### `reset_webassembly_binding` <a name="reset_webassembly_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.resetWebassemblyBinding"></a>

```python
def reset_webassembly_binding() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScript.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScript.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScript.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBinding">analytics_engine_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList">WorkerScriptAnalyticsEngineBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBinding">kv_namespace_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList">WorkerScriptKvNamespaceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBinding">plain_text_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList">WorkerScriptPlainTextBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBinding">queue_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList">WorkerScriptQueueBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBinding">r2_bucket_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList">WorkerScriptR2BucketBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBinding">secret_text_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList">WorkerScriptSecretTextBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBinding">service_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList">WorkerScriptServiceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBinding">webassembly_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList">WorkerScriptWebassemblyBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBindingInput">analytics_engine_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityDateInput">compatibility_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityFlagsInput">compatibility_flags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBindingInput">kv_namespace_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.logpushInput">logpush_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.moduleInput">module_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBindingInput">plain_text_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBindingInput">queue_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBindingInput">r2_bucket_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBindingInput">secret_text_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBindingInput">service_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBindingInput">webassembly_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityDate">compatibility_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.logpush">logpush</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.module">module</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `analytics_engine_binding`<sup>Required</sup> <a name="analytics_engine_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBinding"></a>

```python
analytics_engine_binding: WorkerScriptAnalyticsEngineBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList">WorkerScriptAnalyticsEngineBindingList</a>

---

##### `kv_namespace_binding`<sup>Required</sup> <a name="kv_namespace_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBinding"></a>

```python
kv_namespace_binding: WorkerScriptKvNamespaceBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList">WorkerScriptKvNamespaceBindingList</a>

---

##### `plain_text_binding`<sup>Required</sup> <a name="plain_text_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBinding"></a>

```python
plain_text_binding: WorkerScriptPlainTextBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList">WorkerScriptPlainTextBindingList</a>

---

##### `queue_binding`<sup>Required</sup> <a name="queue_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBinding"></a>

```python
queue_binding: WorkerScriptQueueBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList">WorkerScriptQueueBindingList</a>

---

##### `r2_bucket_binding`<sup>Required</sup> <a name="r2_bucket_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBinding"></a>

```python
r2_bucket_binding: WorkerScriptR2BucketBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList">WorkerScriptR2BucketBindingList</a>

---

##### `secret_text_binding`<sup>Required</sup> <a name="secret_text_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBinding"></a>

```python
secret_text_binding: WorkerScriptSecretTextBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList">WorkerScriptSecretTextBindingList</a>

---

##### `service_binding`<sup>Required</sup> <a name="service_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBinding"></a>

```python
service_binding: WorkerScriptServiceBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList">WorkerScriptServiceBindingList</a>

---

##### `webassembly_binding`<sup>Required</sup> <a name="webassembly_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBinding"></a>

```python
webassembly_binding: WorkerScriptWebassemblyBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList">WorkerScriptWebassemblyBindingList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `analytics_engine_binding_input`<sup>Optional</sup> <a name="analytics_engine_binding_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.analyticsEngineBindingInput"></a>

```python
analytics_engine_binding_input: typing.Union[IResolvable, typing.List[WorkerScriptAnalyticsEngineBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>]]

---

##### `compatibility_date_input`<sup>Optional</sup> <a name="compatibility_date_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityDateInput"></a>

```python
compatibility_date_input: str
```

- *Type:* str

---

##### `compatibility_flags_input`<sup>Optional</sup> <a name="compatibility_flags_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityFlagsInput"></a>

```python
compatibility_flags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kv_namespace_binding_input`<sup>Optional</sup> <a name="kv_namespace_binding_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.kvNamespaceBindingInput"></a>

```python
kv_namespace_binding_input: typing.Union[IResolvable, typing.List[WorkerScriptKvNamespaceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>]]

---

##### `logpush_input`<sup>Optional</sup> <a name="logpush_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.logpushInput"></a>

```python
logpush_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `module_input`<sup>Optional</sup> <a name="module_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.moduleInput"></a>

```python
module_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `plain_text_binding_input`<sup>Optional</sup> <a name="plain_text_binding_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.plainTextBindingInput"></a>

```python
plain_text_binding_input: typing.Union[IResolvable, typing.List[WorkerScriptPlainTextBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>]]

---

##### `queue_binding_input`<sup>Optional</sup> <a name="queue_binding_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.queueBindingInput"></a>

```python
queue_binding_input: typing.Union[IResolvable, typing.List[WorkerScriptQueueBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>]]

---

##### `r2_bucket_binding_input`<sup>Optional</sup> <a name="r2_bucket_binding_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.r2BucketBindingInput"></a>

```python
r2_bucket_binding_input: typing.Union[IResolvable, typing.List[WorkerScriptR2BucketBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>]]

---

##### `secret_text_binding_input`<sup>Optional</sup> <a name="secret_text_binding_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.secretTextBindingInput"></a>

```python
secret_text_binding_input: typing.Union[IResolvable, typing.List[WorkerScriptSecretTextBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>]]

---

##### `service_binding_input`<sup>Optional</sup> <a name="service_binding_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.serviceBindingInput"></a>

```python
service_binding_input: typing.Union[IResolvable, typing.List[WorkerScriptServiceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>]]

---

##### `webassembly_binding_input`<sup>Optional</sup> <a name="webassembly_binding_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.webassemblyBindingInput"></a>

```python
webassembly_binding_input: typing.Union[IResolvable, typing.List[WorkerScriptWebassemblyBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `compatibility_date`<sup>Required</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityDate"></a>

```python
compatibility_date: str
```

- *Type:* str

---

##### `compatibility_flags`<sup>Required</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.compatibilityFlags"></a>

```python
compatibility_flags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logpush`<sup>Required</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.logpush"></a>

```python
logpush: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.module"></a>

```python
module: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.workerScript.WorkerScript.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkerScriptAnalyticsEngineBinding <a name="WorkerScriptAnalyticsEngineBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptAnalyticsEngineBinding(
  dataset: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.dataset">dataset</a></code> | <code>str</code> | The name of the Analytics Engine dataset to write to. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

The name of the Analytics Engine dataset to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#dataset WorkerScript#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#name WorkerScript#name}

---

### WorkerScriptConfig <a name="WorkerScriptConfig" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  content: str,
  name: str,
  analytics_engine_binding: typing.Union[IResolvable, typing.List[WorkerScriptAnalyticsEngineBinding]] = None,
  compatibility_date: str = None,
  compatibility_flags: typing.List[str] = None,
  id: str = None,
  kv_namespace_binding: typing.Union[IResolvable, typing.List[WorkerScriptKvNamespaceBinding]] = None,
  logpush: typing.Union[bool, IResolvable] = None,
  module: typing.Union[bool, IResolvable] = None,
  plain_text_binding: typing.Union[IResolvable, typing.List[WorkerScriptPlainTextBinding]] = None,
  queue_binding: typing.Union[IResolvable, typing.List[WorkerScriptQueueBinding]] = None,
  r2_bucket_binding: typing.Union[IResolvable, typing.List[WorkerScriptR2BucketBinding]] = None,
  secret_text_binding: typing.Union[IResolvable, typing.List[WorkerScriptSecretTextBinding]] = None,
  service_binding: typing.Union[IResolvable, typing.List[WorkerScriptServiceBinding]] = None,
  webassembly_binding: typing.Union[IResolvable, typing.List[WorkerScriptWebassemblyBinding]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.content">content</a></code> | <code>str</code> | The script content. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.name">name</a></code> | <code>str</code> | The name for the script. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.analyticsEngineBinding">analytics_engine_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>]]</code> | analytics_engine_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.compatibilityDate">compatibility_date</a></code> | <code>str</code> | The date to use for the compatibility flag. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | Compatibility flags used for Worker Scripts. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#id WorkerScript#id}. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.kvNamespaceBinding">kv_namespace_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>]]</code> | kv_namespace_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.logpush">logpush</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling allows Worker events to be sent to a defined Logpush destination. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.module">module</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to upload Worker as a module. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.plainTextBinding">plain_text_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>]]</code> | plain_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.queueBinding">queue_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>]]</code> | queue_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.r2BucketBinding">r2_bucket_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>]]</code> | r2_bucket_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.secretTextBinding">secret_text_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>]]</code> | secret_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.serviceBinding">service_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>]]</code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.webassemblyBinding">webassembly_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>]]</code> | webassembly_binding block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#account_id WorkerScript#account_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.content"></a>

```python
content: str
```

- *Type:* str

The script content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#content WorkerScript#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for the script. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `analytics_engine_binding`<sup>Optional</sup> <a name="analytics_engine_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.analyticsEngineBinding"></a>

```python
analytics_engine_binding: typing.Union[IResolvable, typing.List[WorkerScriptAnalyticsEngineBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>]]

analytics_engine_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#analytics_engine_binding WorkerScript#analytics_engine_binding}

---

##### `compatibility_date`<sup>Optional</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.compatibilityDate"></a>

```python
compatibility_date: str
```

- *Type:* str

The date to use for the compatibility flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#compatibility_date WorkerScript#compatibility_date}

---

##### `compatibility_flags`<sup>Optional</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.compatibilityFlags"></a>

```python
compatibility_flags: typing.List[str]
```

- *Type:* typing.List[str]

Compatibility flags used for Worker Scripts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#compatibility_flags WorkerScript#compatibility_flags}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#id WorkerScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kv_namespace_binding`<sup>Optional</sup> <a name="kv_namespace_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.kvNamespaceBinding"></a>

```python
kv_namespace_binding: typing.Union[IResolvable, typing.List[WorkerScriptKvNamespaceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>]]

kv_namespace_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#kv_namespace_binding WorkerScript#kv_namespace_binding}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.logpush"></a>

```python
logpush: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling allows Worker events to be sent to a defined Logpush destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#logpush WorkerScript#logpush}

---

##### `module`<sup>Optional</sup> <a name="module" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.module"></a>

```python
module: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to upload Worker as a module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#module WorkerScript#module}

---

##### `plain_text_binding`<sup>Optional</sup> <a name="plain_text_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.plainTextBinding"></a>

```python
plain_text_binding: typing.Union[IResolvable, typing.List[WorkerScriptPlainTextBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>]]

plain_text_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#plain_text_binding WorkerScript#plain_text_binding}

---

##### `queue_binding`<sup>Optional</sup> <a name="queue_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.queueBinding"></a>

```python
queue_binding: typing.Union[IResolvable, typing.List[WorkerScriptQueueBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>]]

queue_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#queue_binding WorkerScript#queue_binding}

---

##### `r2_bucket_binding`<sup>Optional</sup> <a name="r2_bucket_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.r2BucketBinding"></a>

```python
r2_bucket_binding: typing.Union[IResolvable, typing.List[WorkerScriptR2BucketBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>]]

r2_bucket_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#r2_bucket_binding WorkerScript#r2_bucket_binding}

---

##### `secret_text_binding`<sup>Optional</sup> <a name="secret_text_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.secretTextBinding"></a>

```python
secret_text_binding: typing.Union[IResolvable, typing.List[WorkerScriptSecretTextBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>]]

secret_text_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#secret_text_binding WorkerScript#secret_text_binding}

---

##### `service_binding`<sup>Optional</sup> <a name="service_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.serviceBinding"></a>

```python
service_binding: typing.Union[IResolvable, typing.List[WorkerScriptServiceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>]]

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#service_binding WorkerScript#service_binding}

---

##### `webassembly_binding`<sup>Optional</sup> <a name="webassembly_binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptConfig.property.webassemblyBinding"></a>

```python
webassembly_binding: typing.Union[IResolvable, typing.List[WorkerScriptWebassemblyBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>]]

webassembly_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#webassembly_binding WorkerScript#webassembly_binding}

---

### WorkerScriptKvNamespaceBinding <a name="WorkerScriptKvNamespaceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptKvNamespaceBinding(
  name: str,
  namespace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.namespaceId">namespace_id</a></code> | <code>str</code> | ID of the KV namespace you want to use. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

ID of the KV namespace you want to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#namespace_id WorkerScript#namespace_id}

---

### WorkerScriptPlainTextBinding <a name="WorkerScriptPlainTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptPlainTextBinding(
  name: str,
  text: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.text">text</a></code> | <code>str</code> | The plain text you want to store. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding.property.text"></a>

```python
text: str
```

- *Type:* str

The plain text you want to store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#text WorkerScript#text}

---

### WorkerScriptQueueBinding <a name="WorkerScriptQueueBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptQueueBinding(
  binding: str,
  queue: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.binding">binding</a></code> | <code>str</code> | The name of the global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.queue">queue</a></code> | <code>str</code> | Name of the queue you want to use. |

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.binding"></a>

```python
binding: str
```

- *Type:* str

The name of the global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#binding WorkerScript#binding}

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding.property.queue"></a>

```python
queue: str
```

- *Type:* str

Name of the queue you want to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#queue WorkerScript#queue}

---

### WorkerScriptR2BucketBinding <a name="WorkerScriptR2BucketBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptR2BucketBinding(
  bucket_name: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.bucketName">bucket_name</a></code> | <code>str</code> | The name of the Bucket to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The name of the Bucket to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#bucket_name WorkerScript#bucket_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#name WorkerScript#name}

---

### WorkerScriptSecretTextBinding <a name="WorkerScriptSecretTextBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptSecretTextBinding(
  name: str,
  text: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.text">text</a></code> | <code>str</code> | The secret text you want to store. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding.property.text"></a>

```python
text: str
```

- *Type:* str

The secret text you want to store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#text WorkerScript#text}

---

### WorkerScriptServiceBinding <a name="WorkerScriptServiceBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptServiceBinding(
  name: str,
  service: str,
  environment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.service">service</a></code> | <code>str</code> | The name of the Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.environment">environment</a></code> | <code>str</code> | The name of the Worker environment to bind to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#name WorkerScript#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.service"></a>

```python
service: str
```

- *Type:* str

The name of the Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#service WorkerScript#service}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding.property.environment"></a>

```python
environment: str
```

- *Type:* str

The name of the Worker environment to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#environment WorkerScript#environment}

---

### WorkerScriptWebassemblyBinding <a name="WorkerScriptWebassemblyBinding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptWebassemblyBinding(
  module: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.module">module</a></code> | <code>str</code> | The base64 encoded wasm module you want to store. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.module"></a>

```python
module: str
```

- *Type:* str

The base64 encoded wasm module you want to store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#module WorkerScript#module}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.9.0/docs/resources/worker_script#name WorkerScript#name}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkerScriptAnalyticsEngineBindingList <a name="WorkerScriptAnalyticsEngineBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptAnalyticsEngineBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerScriptAnalyticsEngineBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkerScriptAnalyticsEngineBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>]]

---


### WorkerScriptAnalyticsEngineBindingOutputReference <a name="WorkerScriptAnalyticsEngineBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptAnalyticsEngineBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerScriptAnalyticsEngineBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptAnalyticsEngineBinding">WorkerScriptAnalyticsEngineBinding</a>]

---


### WorkerScriptKvNamespaceBindingList <a name="WorkerScriptKvNamespaceBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptKvNamespaceBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerScriptKvNamespaceBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkerScriptKvNamespaceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>]]

---


### WorkerScriptKvNamespaceBindingOutputReference <a name="WorkerScriptKvNamespaceBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptKvNamespaceBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerScriptKvNamespaceBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptKvNamespaceBinding">WorkerScriptKvNamespaceBinding</a>]

---


### WorkerScriptPlainTextBindingList <a name="WorkerScriptPlainTextBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptPlainTextBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerScriptPlainTextBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkerScriptPlainTextBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>]]

---


### WorkerScriptPlainTextBindingOutputReference <a name="WorkerScriptPlainTextBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptPlainTextBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerScriptPlainTextBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptPlainTextBinding">WorkerScriptPlainTextBinding</a>]

---


### WorkerScriptQueueBindingList <a name="WorkerScriptQueueBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptQueueBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerScriptQueueBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkerScriptQueueBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>]]

---


### WorkerScriptQueueBindingOutputReference <a name="WorkerScriptQueueBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptQueueBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.bindingInput">binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queueInput">queue_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.binding">binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queue">queue</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binding_input`<sup>Optional</sup> <a name="binding_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.bindingInput"></a>

```python
binding_input: str
```

- *Type:* str

---

##### `queue_input`<sup>Optional</sup> <a name="queue_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queueInput"></a>

```python
queue_input: str
```

- *Type:* str

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.binding"></a>

```python
binding: str
```

- *Type:* str

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.queue"></a>

```python
queue: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerScriptQueueBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptQueueBinding">WorkerScriptQueueBinding</a>]

---


### WorkerScriptR2BucketBindingList <a name="WorkerScriptR2BucketBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptR2BucketBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerScriptR2BucketBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkerScriptR2BucketBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>]]

---


### WorkerScriptR2BucketBindingOutputReference <a name="WorkerScriptR2BucketBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptR2BucketBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerScriptR2BucketBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptR2BucketBinding">WorkerScriptR2BucketBinding</a>]

---


### WorkerScriptSecretTextBindingList <a name="WorkerScriptSecretTextBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptSecretTextBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerScriptSecretTextBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkerScriptSecretTextBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>]]

---


### WorkerScriptSecretTextBindingOutputReference <a name="WorkerScriptSecretTextBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptSecretTextBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerScriptSecretTextBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptSecretTextBinding">WorkerScriptSecretTextBinding</a>]

---


### WorkerScriptServiceBindingList <a name="WorkerScriptServiceBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptServiceBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerScriptServiceBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkerScriptServiceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>]]

---


### WorkerScriptServiceBindingOutputReference <a name="WorkerScriptServiceBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptServiceBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerScriptServiceBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptServiceBinding">WorkerScriptServiceBinding</a>]

---


### WorkerScriptWebassemblyBindingList <a name="WorkerScriptWebassemblyBindingList" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptWebassemblyBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerScriptWebassemblyBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkerScriptWebassemblyBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>]]

---


### WorkerScriptWebassemblyBindingOutputReference <a name="WorkerScriptWebassemblyBindingOutputReference" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_script

workerScript.WorkerScriptWebassemblyBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.moduleInput">module_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.module">module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_input`<sup>Optional</sup> <a name="module_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.moduleInput"></a>

```python
module_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.module"></a>

```python
module: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerScriptWebassemblyBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerScript.WorkerScriptWebassemblyBinding">WorkerScriptWebassemblyBinding</a>]

---



