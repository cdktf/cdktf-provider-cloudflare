# `workersScript` Submodule <a name="`workersScript` Submodule" id="@cdktf/provider-cloudflare.workersScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkersScript <a name="WorkersScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScript"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script cloudflare_workers_script}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScript(
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
  analytics_engine_binding: typing.Union[IResolvable, typing.List[WorkersScriptAnalyticsEngineBinding]] = None,
  compatibility_date: str = None,
  compatibility_flags: typing.List[str] = None,
  d1_database_binding: typing.Union[IResolvable, typing.List[WorkersScriptD1DatabaseBinding]] = None,
  dispatch_namespace: str = None,
  hyperdrive_config_binding: typing.Union[IResolvable, typing.List[WorkersScriptHyperdriveConfigBinding]] = None,
  id: str = None,
  kv_namespace_binding: typing.Union[IResolvable, typing.List[WorkersScriptKvNamespaceBinding]] = None,
  logpush: typing.Union[bool, IResolvable] = None,
  module: typing.Union[bool, IResolvable] = None,
  placement: typing.Union[IResolvable, typing.List[WorkersScriptPlacement]] = None,
  plain_text_binding: typing.Union[IResolvable, typing.List[WorkersScriptPlainTextBinding]] = None,
  queue_binding: typing.Union[IResolvable, typing.List[WorkersScriptQueueBinding]] = None,
  r2_bucket_binding: typing.Union[IResolvable, typing.List[WorkersScriptR2BucketBinding]] = None,
  secret_text_binding: typing.Union[IResolvable, typing.List[WorkersScriptSecretTextBinding]] = None,
  service_binding: typing.Union[IResolvable, typing.List[WorkersScriptServiceBinding]] = None,
  tags: typing.List[str] = None,
  webassembly_binding: typing.Union[IResolvable, typing.List[WorkersScriptWebassemblyBinding]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.content">content</a></code> | <code>str</code> | The script content. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for the script. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.analyticsEngineBinding">analytics_engine_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding">WorkersScriptAnalyticsEngineBinding</a>]]</code> | analytics_engine_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.compatibilityDate">compatibility_date</a></code> | <code>str</code> | The date to use for the compatibility flag. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | Compatibility flags used for Worker Scripts. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.d1DatabaseBinding">d1_database_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding">WorkersScriptD1DatabaseBinding</a>]]</code> | d1_database_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.dispatchNamespace">dispatch_namespace</a></code> | <code>str</code> | Name of the Workers for Platforms dispatch namespace. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.hyperdriveConfigBinding">hyperdrive_config_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding">WorkersScriptHyperdriveConfigBinding</a>]]</code> | hyperdrive_config_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#id WorkersScript#id}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.kvNamespaceBinding">kv_namespace_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding">WorkersScriptKvNamespaceBinding</a>]]</code> | kv_namespace_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.logpush">logpush</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling allows Worker events to be sent to a defined Logpush destination. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.module">module</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to upload Worker as a module. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.placement">placement</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>]]</code> | placement block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.plainTextBinding">plain_text_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding">WorkersScriptPlainTextBinding</a>]]</code> | plain_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.queueBinding">queue_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding">WorkersScriptQueueBinding</a>]]</code> | queue_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.r2BucketBinding">r2_bucket_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding">WorkersScriptR2BucketBinding</a>]]</code> | r2_bucket_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.secretTextBinding">secret_text_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding">WorkersScriptSecretTextBinding</a>]]</code> | secret_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.serviceBinding">service_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding">WorkersScriptServiceBinding</a>]]</code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#tags WorkersScript#tags}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.webassemblyBinding">webassembly_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding">WorkersScriptWebassemblyBinding</a>]]</code> | webassembly_binding block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#account_id WorkersScript#account_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.content"></a>

- *Type:* str

The script content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#content WorkersScript#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.name"></a>

- *Type:* str

The name for the script. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#name WorkersScript#name}

---

##### `analytics_engine_binding`<sup>Optional</sup> <a name="analytics_engine_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.analyticsEngineBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding">WorkersScriptAnalyticsEngineBinding</a>]]

analytics_engine_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#analytics_engine_binding WorkersScript#analytics_engine_binding}

---

##### `compatibility_date`<sup>Optional</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.compatibilityDate"></a>

- *Type:* str

The date to use for the compatibility flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#compatibility_date WorkersScript#compatibility_date}

---

##### `compatibility_flags`<sup>Optional</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.compatibilityFlags"></a>

- *Type:* typing.List[str]

Compatibility flags used for Worker Scripts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#compatibility_flags WorkersScript#compatibility_flags}

---

##### `d1_database_binding`<sup>Optional</sup> <a name="d1_database_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.d1DatabaseBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding">WorkersScriptD1DatabaseBinding</a>]]

d1_database_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#d1_database_binding WorkersScript#d1_database_binding}

---

##### `dispatch_namespace`<sup>Optional</sup> <a name="dispatch_namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.dispatchNamespace"></a>

- *Type:* str

Name of the Workers for Platforms dispatch namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#dispatch_namespace WorkersScript#dispatch_namespace}

---

##### `hyperdrive_config_binding`<sup>Optional</sup> <a name="hyperdrive_config_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.hyperdriveConfigBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding">WorkersScriptHyperdriveConfigBinding</a>]]

hyperdrive_config_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#hyperdrive_config_binding WorkersScript#hyperdrive_config_binding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#id WorkersScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kv_namespace_binding`<sup>Optional</sup> <a name="kv_namespace_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.kvNamespaceBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding">WorkersScriptKvNamespaceBinding</a>]]

kv_namespace_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#kv_namespace_binding WorkersScript#kv_namespace_binding}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.logpush"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling allows Worker events to be sent to a defined Logpush destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#logpush WorkersScript#logpush}

---

##### `module`<sup>Optional</sup> <a name="module" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.module"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to upload Worker as a module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#module WorkersScript#module}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.placement"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>]]

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#placement WorkersScript#placement}

---

##### `plain_text_binding`<sup>Optional</sup> <a name="plain_text_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.plainTextBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding">WorkersScriptPlainTextBinding</a>]]

plain_text_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#plain_text_binding WorkersScript#plain_text_binding}

---

##### `queue_binding`<sup>Optional</sup> <a name="queue_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.queueBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding">WorkersScriptQueueBinding</a>]]

queue_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#queue_binding WorkersScript#queue_binding}

---

##### `r2_bucket_binding`<sup>Optional</sup> <a name="r2_bucket_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.r2BucketBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding">WorkersScriptR2BucketBinding</a>]]

r2_bucket_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#r2_bucket_binding WorkersScript#r2_bucket_binding}

---

##### `secret_text_binding`<sup>Optional</sup> <a name="secret_text_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.secretTextBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding">WorkersScriptSecretTextBinding</a>]]

secret_text_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#secret_text_binding WorkersScript#secret_text_binding}

---

##### `service_binding`<sup>Optional</sup> <a name="service_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.serviceBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding">WorkersScriptServiceBinding</a>]]

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#service_binding WorkersScript#service_binding}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#tags WorkersScript#tags}.

---

##### `webassembly_binding`<sup>Optional</sup> <a name="webassembly_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.webassemblyBinding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding">WorkersScriptWebassemblyBinding</a>]]

webassembly_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#webassembly_binding WorkersScript#webassembly_binding}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putAnalyticsEngineBinding">put_analytics_engine_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putD1DatabaseBinding">put_d1_database_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putHyperdriveConfigBinding">put_hyperdrive_config_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putKvNamespaceBinding">put_kv_namespace_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlacement">put_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlainTextBinding">put_plain_text_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putQueueBinding">put_queue_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putR2BucketBinding">put_r2_bucket_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putSecretTextBinding">put_secret_text_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putServiceBinding">put_service_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putWebassemblyBinding">put_webassembly_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetAnalyticsEngineBinding">reset_analytics_engine_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityDate">reset_compatibility_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityFlags">reset_compatibility_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetD1DatabaseBinding">reset_d1_database_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetDispatchNamespace">reset_dispatch_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetHyperdriveConfigBinding">reset_hyperdrive_config_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKvNamespaceBinding">reset_kv_namespace_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLogpush">reset_logpush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetModule">reset_module</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetPlacement">reset_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetPlainTextBinding">reset_plain_text_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetQueueBinding">reset_queue_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetR2BucketBinding">reset_r2_bucket_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetSecretTextBinding">reset_secret_text_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetServiceBinding">reset_service_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetWebassemblyBinding">reset_webassembly_binding</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_analytics_engine_binding` <a name="put_analytics_engine_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putAnalyticsEngineBinding"></a>

```python
def put_analytics_engine_binding(
  value: typing.Union[IResolvable, typing.List[WorkersScriptAnalyticsEngineBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putAnalyticsEngineBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding">WorkersScriptAnalyticsEngineBinding</a>]]

---

##### `put_d1_database_binding` <a name="put_d1_database_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putD1DatabaseBinding"></a>

```python
def put_d1_database_binding(
  value: typing.Union[IResolvable, typing.List[WorkersScriptD1DatabaseBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putD1DatabaseBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding">WorkersScriptD1DatabaseBinding</a>]]

---

##### `put_hyperdrive_config_binding` <a name="put_hyperdrive_config_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putHyperdriveConfigBinding"></a>

```python
def put_hyperdrive_config_binding(
  value: typing.Union[IResolvable, typing.List[WorkersScriptHyperdriveConfigBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putHyperdriveConfigBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding">WorkersScriptHyperdriveConfigBinding</a>]]

---

##### `put_kv_namespace_binding` <a name="put_kv_namespace_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putKvNamespaceBinding"></a>

```python
def put_kv_namespace_binding(
  value: typing.Union[IResolvable, typing.List[WorkersScriptKvNamespaceBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putKvNamespaceBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding">WorkersScriptKvNamespaceBinding</a>]]

---

##### `put_placement` <a name="put_placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlacement"></a>

```python
def put_placement(
  value: typing.Union[IResolvable, typing.List[WorkersScriptPlacement]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlacement.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>]]

---

##### `put_plain_text_binding` <a name="put_plain_text_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlainTextBinding"></a>

```python
def put_plain_text_binding(
  value: typing.Union[IResolvable, typing.List[WorkersScriptPlainTextBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlainTextBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding">WorkersScriptPlainTextBinding</a>]]

---

##### `put_queue_binding` <a name="put_queue_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putQueueBinding"></a>

```python
def put_queue_binding(
  value: typing.Union[IResolvable, typing.List[WorkersScriptQueueBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putQueueBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding">WorkersScriptQueueBinding</a>]]

---

##### `put_r2_bucket_binding` <a name="put_r2_bucket_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putR2BucketBinding"></a>

```python
def put_r2_bucket_binding(
  value: typing.Union[IResolvable, typing.List[WorkersScriptR2BucketBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putR2BucketBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding">WorkersScriptR2BucketBinding</a>]]

---

##### `put_secret_text_binding` <a name="put_secret_text_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putSecretTextBinding"></a>

```python
def put_secret_text_binding(
  value: typing.Union[IResolvable, typing.List[WorkersScriptSecretTextBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putSecretTextBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding">WorkersScriptSecretTextBinding</a>]]

---

##### `put_service_binding` <a name="put_service_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putServiceBinding"></a>

```python
def put_service_binding(
  value: typing.Union[IResolvable, typing.List[WorkersScriptServiceBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putServiceBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding">WorkersScriptServiceBinding</a>]]

---

##### `put_webassembly_binding` <a name="put_webassembly_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putWebassemblyBinding"></a>

```python
def put_webassembly_binding(
  value: typing.Union[IResolvable, typing.List[WorkersScriptWebassemblyBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putWebassemblyBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding">WorkersScriptWebassemblyBinding</a>]]

---

##### `reset_analytics_engine_binding` <a name="reset_analytics_engine_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetAnalyticsEngineBinding"></a>

```python
def reset_analytics_engine_binding() -> None
```

##### `reset_compatibility_date` <a name="reset_compatibility_date" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityDate"></a>

```python
def reset_compatibility_date() -> None
```

##### `reset_compatibility_flags` <a name="reset_compatibility_flags" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityFlags"></a>

```python
def reset_compatibility_flags() -> None
```

##### `reset_d1_database_binding` <a name="reset_d1_database_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetD1DatabaseBinding"></a>

```python
def reset_d1_database_binding() -> None
```

##### `reset_dispatch_namespace` <a name="reset_dispatch_namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetDispatchNamespace"></a>

```python
def reset_dispatch_namespace() -> None
```

##### `reset_hyperdrive_config_binding` <a name="reset_hyperdrive_config_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetHyperdriveConfigBinding"></a>

```python
def reset_hyperdrive_config_binding() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kv_namespace_binding` <a name="reset_kv_namespace_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKvNamespaceBinding"></a>

```python
def reset_kv_namespace_binding() -> None
```

##### `reset_logpush` <a name="reset_logpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLogpush"></a>

```python
def reset_logpush() -> None
```

##### `reset_module` <a name="reset_module" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetModule"></a>

```python
def reset_module() -> None
```

##### `reset_placement` <a name="reset_placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetPlacement"></a>

```python
def reset_placement() -> None
```

##### `reset_plain_text_binding` <a name="reset_plain_text_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetPlainTextBinding"></a>

```python
def reset_plain_text_binding() -> None
```

##### `reset_queue_binding` <a name="reset_queue_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetQueueBinding"></a>

```python
def reset_queue_binding() -> None
```

##### `reset_r2_bucket_binding` <a name="reset_r2_bucket_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetR2BucketBinding"></a>

```python
def reset_r2_bucket_binding() -> None
```

##### `reset_secret_text_binding` <a name="reset_secret_text_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetSecretTextBinding"></a>

```python
def reset_secret_text_binding() -> None
```

##### `reset_service_binding` <a name="reset_service_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetServiceBinding"></a>

```python
def reset_service_binding() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_webassembly_binding` <a name="reset_webassembly_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetWebassemblyBinding"></a>

```python
def reset_webassembly_binding() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WorkersScript resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScript.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScript.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScript.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScript.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WorkersScript resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkersScript to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkersScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkersScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.analyticsEngineBinding">analytics_engine_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList">WorkersScriptAnalyticsEngineBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.d1DatabaseBinding">d1_database_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList">WorkersScriptD1DatabaseBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hyperdriveConfigBinding">hyperdrive_config_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList">WorkersScriptHyperdriveConfigBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.kvNamespaceBinding">kv_namespace_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList">WorkersScriptKvNamespaceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList">WorkersScriptPlacementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.plainTextBinding">plain_text_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList">WorkersScriptPlainTextBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.queueBinding">queue_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList">WorkersScriptQueueBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.r2BucketBinding">r2_bucket_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList">WorkersScriptR2BucketBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.secretTextBinding">secret_text_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList">WorkersScriptSecretTextBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.serviceBinding">service_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList">WorkersScriptServiceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.webassemblyBinding">webassembly_binding</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList">WorkersScriptWebassemblyBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.analyticsEngineBindingInput">analytics_engine_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding">WorkersScriptAnalyticsEngineBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDateInput">compatibility_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlagsInput">compatibility_flags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.d1DatabaseBindingInput">d1_database_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding">WorkersScriptD1DatabaseBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.dispatchNamespaceInput">dispatch_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hyperdriveConfigBindingInput">hyperdrive_config_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding">WorkersScriptHyperdriveConfigBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.kvNamespaceBindingInput">kv_namespace_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding">WorkersScriptKvNamespaceBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpushInput">logpush_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.moduleInput">module_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placementInput">placement_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.plainTextBindingInput">plain_text_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding">WorkersScriptPlainTextBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.queueBindingInput">queue_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding">WorkersScriptQueueBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.r2BucketBindingInput">r2_bucket_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding">WorkersScriptR2BucketBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.secretTextBindingInput">secret_text_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding">WorkersScriptSecretTextBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.serviceBindingInput">service_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding">WorkersScriptServiceBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.webassemblyBindingInput">webassembly_binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding">WorkersScriptWebassemblyBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDate">compatibility_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.dispatchNamespace">dispatch_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpush">logpush</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.module">module</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `analytics_engine_binding`<sup>Required</sup> <a name="analytics_engine_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.analyticsEngineBinding"></a>

```python
analytics_engine_binding: WorkersScriptAnalyticsEngineBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList">WorkersScriptAnalyticsEngineBindingList</a>

---

##### `d1_database_binding`<sup>Required</sup> <a name="d1_database_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.d1DatabaseBinding"></a>

```python
d1_database_binding: WorkersScriptD1DatabaseBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList">WorkersScriptD1DatabaseBindingList</a>

---

##### `hyperdrive_config_binding`<sup>Required</sup> <a name="hyperdrive_config_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hyperdriveConfigBinding"></a>

```python
hyperdrive_config_binding: WorkersScriptHyperdriveConfigBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList">WorkersScriptHyperdriveConfigBindingList</a>

---

##### `kv_namespace_binding`<sup>Required</sup> <a name="kv_namespace_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.kvNamespaceBinding"></a>

```python
kv_namespace_binding: WorkersScriptKvNamespaceBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList">WorkersScriptKvNamespaceBindingList</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placement"></a>

```python
placement: WorkersScriptPlacementList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList">WorkersScriptPlacementList</a>

---

##### `plain_text_binding`<sup>Required</sup> <a name="plain_text_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.plainTextBinding"></a>

```python
plain_text_binding: WorkersScriptPlainTextBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList">WorkersScriptPlainTextBindingList</a>

---

##### `queue_binding`<sup>Required</sup> <a name="queue_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.queueBinding"></a>

```python
queue_binding: WorkersScriptQueueBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList">WorkersScriptQueueBindingList</a>

---

##### `r2_bucket_binding`<sup>Required</sup> <a name="r2_bucket_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.r2BucketBinding"></a>

```python
r2_bucket_binding: WorkersScriptR2BucketBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList">WorkersScriptR2BucketBindingList</a>

---

##### `secret_text_binding`<sup>Required</sup> <a name="secret_text_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.secretTextBinding"></a>

```python
secret_text_binding: WorkersScriptSecretTextBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList">WorkersScriptSecretTextBindingList</a>

---

##### `service_binding`<sup>Required</sup> <a name="service_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.serviceBinding"></a>

```python
service_binding: WorkersScriptServiceBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList">WorkersScriptServiceBindingList</a>

---

##### `webassembly_binding`<sup>Required</sup> <a name="webassembly_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.webassemblyBinding"></a>

```python
webassembly_binding: WorkersScriptWebassemblyBindingList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList">WorkersScriptWebassemblyBindingList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `analytics_engine_binding_input`<sup>Optional</sup> <a name="analytics_engine_binding_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.analyticsEngineBindingInput"></a>

```python
analytics_engine_binding_input: typing.Union[IResolvable, typing.List[WorkersScriptAnalyticsEngineBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding">WorkersScriptAnalyticsEngineBinding</a>]]

---

##### `compatibility_date_input`<sup>Optional</sup> <a name="compatibility_date_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDateInput"></a>

```python
compatibility_date_input: str
```

- *Type:* str

---

##### `compatibility_flags_input`<sup>Optional</sup> <a name="compatibility_flags_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlagsInput"></a>

```python
compatibility_flags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `d1_database_binding_input`<sup>Optional</sup> <a name="d1_database_binding_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.d1DatabaseBindingInput"></a>

```python
d1_database_binding_input: typing.Union[IResolvable, typing.List[WorkersScriptD1DatabaseBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding">WorkersScriptD1DatabaseBinding</a>]]

---

##### `dispatch_namespace_input`<sup>Optional</sup> <a name="dispatch_namespace_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.dispatchNamespaceInput"></a>

```python
dispatch_namespace_input: str
```

- *Type:* str

---

##### `hyperdrive_config_binding_input`<sup>Optional</sup> <a name="hyperdrive_config_binding_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hyperdriveConfigBindingInput"></a>

```python
hyperdrive_config_binding_input: typing.Union[IResolvable, typing.List[WorkersScriptHyperdriveConfigBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding">WorkersScriptHyperdriveConfigBinding</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kv_namespace_binding_input`<sup>Optional</sup> <a name="kv_namespace_binding_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.kvNamespaceBindingInput"></a>

```python
kv_namespace_binding_input: typing.Union[IResolvable, typing.List[WorkersScriptKvNamespaceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding">WorkersScriptKvNamespaceBinding</a>]]

---

##### `logpush_input`<sup>Optional</sup> <a name="logpush_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpushInput"></a>

```python
logpush_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `module_input`<sup>Optional</sup> <a name="module_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.moduleInput"></a>

```python
module_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `placement_input`<sup>Optional</sup> <a name="placement_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placementInput"></a>

```python
placement_input: typing.Union[IResolvable, typing.List[WorkersScriptPlacement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>]]

---

##### `plain_text_binding_input`<sup>Optional</sup> <a name="plain_text_binding_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.plainTextBindingInput"></a>

```python
plain_text_binding_input: typing.Union[IResolvable, typing.List[WorkersScriptPlainTextBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding">WorkersScriptPlainTextBinding</a>]]

---

##### `queue_binding_input`<sup>Optional</sup> <a name="queue_binding_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.queueBindingInput"></a>

```python
queue_binding_input: typing.Union[IResolvable, typing.List[WorkersScriptQueueBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding">WorkersScriptQueueBinding</a>]]

---

##### `r2_bucket_binding_input`<sup>Optional</sup> <a name="r2_bucket_binding_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.r2BucketBindingInput"></a>

```python
r2_bucket_binding_input: typing.Union[IResolvable, typing.List[WorkersScriptR2BucketBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding">WorkersScriptR2BucketBinding</a>]]

---

##### `secret_text_binding_input`<sup>Optional</sup> <a name="secret_text_binding_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.secretTextBindingInput"></a>

```python
secret_text_binding_input: typing.Union[IResolvable, typing.List[WorkersScriptSecretTextBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding">WorkersScriptSecretTextBinding</a>]]

---

##### `service_binding_input`<sup>Optional</sup> <a name="service_binding_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.serviceBindingInput"></a>

```python
service_binding_input: typing.Union[IResolvable, typing.List[WorkersScriptServiceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding">WorkersScriptServiceBinding</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `webassembly_binding_input`<sup>Optional</sup> <a name="webassembly_binding_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.webassemblyBindingInput"></a>

```python
webassembly_binding_input: typing.Union[IResolvable, typing.List[WorkersScriptWebassemblyBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding">WorkersScriptWebassemblyBinding</a>]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `compatibility_date`<sup>Required</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDate"></a>

```python
compatibility_date: str
```

- *Type:* str

---

##### `compatibility_flags`<sup>Required</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlags"></a>

```python
compatibility_flags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `dispatch_namespace`<sup>Required</sup> <a name="dispatch_namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.dispatchNamespace"></a>

```python
dispatch_namespace: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logpush`<sup>Required</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpush"></a>

```python
logpush: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.module"></a>

```python
module: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkersScriptAnalyticsEngineBinding <a name="WorkersScriptAnalyticsEngineBinding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptAnalyticsEngineBinding(
  dataset: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding.property.dataset">dataset</a></code> | <code>str</code> | The name of the Analytics Engine dataset to write to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

The name of the Analytics Engine dataset to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#dataset WorkersScript#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#name WorkersScript#name}

---

### WorkersScriptConfig <a name="WorkersScriptConfig" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptConfig(
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
  analytics_engine_binding: typing.Union[IResolvable, typing.List[WorkersScriptAnalyticsEngineBinding]] = None,
  compatibility_date: str = None,
  compatibility_flags: typing.List[str] = None,
  d1_database_binding: typing.Union[IResolvable, typing.List[WorkersScriptD1DatabaseBinding]] = None,
  dispatch_namespace: str = None,
  hyperdrive_config_binding: typing.Union[IResolvable, typing.List[WorkersScriptHyperdriveConfigBinding]] = None,
  id: str = None,
  kv_namespace_binding: typing.Union[IResolvable, typing.List[WorkersScriptKvNamespaceBinding]] = None,
  logpush: typing.Union[bool, IResolvable] = None,
  module: typing.Union[bool, IResolvable] = None,
  placement: typing.Union[IResolvable, typing.List[WorkersScriptPlacement]] = None,
  plain_text_binding: typing.Union[IResolvable, typing.List[WorkersScriptPlainTextBinding]] = None,
  queue_binding: typing.Union[IResolvable, typing.List[WorkersScriptQueueBinding]] = None,
  r2_bucket_binding: typing.Union[IResolvable, typing.List[WorkersScriptR2BucketBinding]] = None,
  secret_text_binding: typing.Union[IResolvable, typing.List[WorkersScriptSecretTextBinding]] = None,
  service_binding: typing.Union[IResolvable, typing.List[WorkersScriptServiceBinding]] = None,
  tags: typing.List[str] = None,
  webassembly_binding: typing.Union[IResolvable, typing.List[WorkersScriptWebassemblyBinding]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.content">content</a></code> | <code>str</code> | The script content. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.name">name</a></code> | <code>str</code> | The name for the script. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.analyticsEngineBinding">analytics_engine_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding">WorkersScriptAnalyticsEngineBinding</a>]]</code> | analytics_engine_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityDate">compatibility_date</a></code> | <code>str</code> | The date to use for the compatibility flag. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | Compatibility flags used for Worker Scripts. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.d1DatabaseBinding">d1_database_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding">WorkersScriptD1DatabaseBinding</a>]]</code> | d1_database_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.dispatchNamespace">dispatch_namespace</a></code> | <code>str</code> | Name of the Workers for Platforms dispatch namespace. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.hyperdriveConfigBinding">hyperdrive_config_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding">WorkersScriptHyperdriveConfigBinding</a>]]</code> | hyperdrive_config_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#id WorkersScript#id}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.kvNamespaceBinding">kv_namespace_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding">WorkersScriptKvNamespaceBinding</a>]]</code> | kv_namespace_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.logpush">logpush</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enabling allows Worker events to be sent to a defined Logpush destination. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.module">module</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to upload Worker as a module. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.placement">placement</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>]]</code> | placement block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.plainTextBinding">plain_text_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding">WorkersScriptPlainTextBinding</a>]]</code> | plain_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.queueBinding">queue_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding">WorkersScriptQueueBinding</a>]]</code> | queue_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.r2BucketBinding">r2_bucket_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding">WorkersScriptR2BucketBinding</a>]]</code> | r2_bucket_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.secretTextBinding">secret_text_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding">WorkersScriptSecretTextBinding</a>]]</code> | secret_text_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.serviceBinding">service_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding">WorkersScriptServiceBinding</a>]]</code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#tags WorkersScript#tags}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.webassemblyBinding">webassembly_binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding">WorkersScriptWebassemblyBinding</a>]]</code> | webassembly_binding block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#account_id WorkersScript#account_id}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.content"></a>

```python
content: str
```

- *Type:* str

The script content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#content WorkersScript#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for the script. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#name WorkersScript#name}

---

##### `analytics_engine_binding`<sup>Optional</sup> <a name="analytics_engine_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.analyticsEngineBinding"></a>

```python
analytics_engine_binding: typing.Union[IResolvable, typing.List[WorkersScriptAnalyticsEngineBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding">WorkersScriptAnalyticsEngineBinding</a>]]

analytics_engine_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#analytics_engine_binding WorkersScript#analytics_engine_binding}

---

##### `compatibility_date`<sup>Optional</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityDate"></a>

```python
compatibility_date: str
```

- *Type:* str

The date to use for the compatibility flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#compatibility_date WorkersScript#compatibility_date}

---

##### `compatibility_flags`<sup>Optional</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityFlags"></a>

```python
compatibility_flags: typing.List[str]
```

- *Type:* typing.List[str]

Compatibility flags used for Worker Scripts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#compatibility_flags WorkersScript#compatibility_flags}

---

##### `d1_database_binding`<sup>Optional</sup> <a name="d1_database_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.d1DatabaseBinding"></a>

```python
d1_database_binding: typing.Union[IResolvable, typing.List[WorkersScriptD1DatabaseBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding">WorkersScriptD1DatabaseBinding</a>]]

d1_database_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#d1_database_binding WorkersScript#d1_database_binding}

---

##### `dispatch_namespace`<sup>Optional</sup> <a name="dispatch_namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.dispatchNamespace"></a>

```python
dispatch_namespace: str
```

- *Type:* str

Name of the Workers for Platforms dispatch namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#dispatch_namespace WorkersScript#dispatch_namespace}

---

##### `hyperdrive_config_binding`<sup>Optional</sup> <a name="hyperdrive_config_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.hyperdriveConfigBinding"></a>

```python
hyperdrive_config_binding: typing.Union[IResolvable, typing.List[WorkersScriptHyperdriveConfigBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding">WorkersScriptHyperdriveConfigBinding</a>]]

hyperdrive_config_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#hyperdrive_config_binding WorkersScript#hyperdrive_config_binding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#id WorkersScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kv_namespace_binding`<sup>Optional</sup> <a name="kv_namespace_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.kvNamespaceBinding"></a>

```python
kv_namespace_binding: typing.Union[IResolvable, typing.List[WorkersScriptKvNamespaceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding">WorkersScriptKvNamespaceBinding</a>]]

kv_namespace_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#kv_namespace_binding WorkersScript#kv_namespace_binding}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.logpush"></a>

```python
logpush: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enabling allows Worker events to be sent to a defined Logpush destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#logpush WorkersScript#logpush}

---

##### `module`<sup>Optional</sup> <a name="module" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.module"></a>

```python
module: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to upload Worker as a module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#module WorkersScript#module}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.placement"></a>

```python
placement: typing.Union[IResolvable, typing.List[WorkersScriptPlacement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>]]

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#placement WorkersScript#placement}

---

##### `plain_text_binding`<sup>Optional</sup> <a name="plain_text_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.plainTextBinding"></a>

```python
plain_text_binding: typing.Union[IResolvable, typing.List[WorkersScriptPlainTextBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding">WorkersScriptPlainTextBinding</a>]]

plain_text_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#plain_text_binding WorkersScript#plain_text_binding}

---

##### `queue_binding`<sup>Optional</sup> <a name="queue_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.queueBinding"></a>

```python
queue_binding: typing.Union[IResolvable, typing.List[WorkersScriptQueueBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding">WorkersScriptQueueBinding</a>]]

queue_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#queue_binding WorkersScript#queue_binding}

---

##### `r2_bucket_binding`<sup>Optional</sup> <a name="r2_bucket_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.r2BucketBinding"></a>

```python
r2_bucket_binding: typing.Union[IResolvable, typing.List[WorkersScriptR2BucketBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding">WorkersScriptR2BucketBinding</a>]]

r2_bucket_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#r2_bucket_binding WorkersScript#r2_bucket_binding}

---

##### `secret_text_binding`<sup>Optional</sup> <a name="secret_text_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.secretTextBinding"></a>

```python
secret_text_binding: typing.Union[IResolvable, typing.List[WorkersScriptSecretTextBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding">WorkersScriptSecretTextBinding</a>]]

secret_text_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#secret_text_binding WorkersScript#secret_text_binding}

---

##### `service_binding`<sup>Optional</sup> <a name="service_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.serviceBinding"></a>

```python
service_binding: typing.Union[IResolvable, typing.List[WorkersScriptServiceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding">WorkersScriptServiceBinding</a>]]

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#service_binding WorkersScript#service_binding}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#tags WorkersScript#tags}.

---

##### `webassembly_binding`<sup>Optional</sup> <a name="webassembly_binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.webassemblyBinding"></a>

```python
webassembly_binding: typing.Union[IResolvable, typing.List[WorkersScriptWebassemblyBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding">WorkersScriptWebassemblyBinding</a>]]

webassembly_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#webassembly_binding WorkersScript#webassembly_binding}

---

### WorkersScriptD1DatabaseBinding <a name="WorkersScriptD1DatabaseBinding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptD1DatabaseBinding(
  database_id: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding.property.databaseId">database_id</a></code> | <code>str</code> | Database ID of D1 database to use. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Database ID of D1 database to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#database_id WorkersScript#database_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#name WorkersScript#name}

---

### WorkersScriptHyperdriveConfigBinding <a name="WorkersScriptHyperdriveConfigBinding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptHyperdriveConfigBinding(
  binding: str,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding.property.binding">binding</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding.property.id">id</a></code> | <code>str</code> | The ID of the Hyperdrive config to use. |

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding.property.binding"></a>

```python
binding: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#binding WorkersScript#binding}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the Hyperdrive config to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#id WorkersScript#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WorkersScriptKvNamespaceBinding <a name="WorkersScriptKvNamespaceBinding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptKvNamespaceBinding(
  name: str,
  namespace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding.property.namespaceId">namespace_id</a></code> | <code>str</code> | ID of the KV namespace you want to use. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#name WorkersScript#name}

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

ID of the KV namespace you want to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#namespace_id WorkersScript#namespace_id}

---

### WorkersScriptPlacement <a name="WorkersScriptPlacement" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptPlacement(
  mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement.property.mode">mode</a></code> | <code>str</code> | The placement mode for the Worker. Available values: `smart`. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement.property.mode"></a>

```python
mode: str
```

- *Type:* str

The placement mode for the Worker. Available values: `smart`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#mode WorkersScript#mode}

---

### WorkersScriptPlainTextBinding <a name="WorkersScriptPlainTextBinding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptPlainTextBinding(
  name: str,
  text: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding.property.text">text</a></code> | <code>str</code> | The plain text you want to store. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#name WorkersScript#name}

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding.property.text"></a>

```python
text: str
```

- *Type:* str

The plain text you want to store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#text WorkersScript#text}

---

### WorkersScriptQueueBinding <a name="WorkersScriptQueueBinding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptQueueBinding(
  binding: str,
  queue: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding.property.binding">binding</a></code> | <code>str</code> | The name of the global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding.property.queue">queue</a></code> | <code>str</code> | Name of the queue you want to use. |

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding.property.binding"></a>

```python
binding: str
```

- *Type:* str

The name of the global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#binding WorkersScript#binding}

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding.property.queue"></a>

```python
queue: str
```

- *Type:* str

Name of the queue you want to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#queue WorkersScript#queue}

---

### WorkersScriptR2BucketBinding <a name="WorkersScriptR2BucketBinding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptR2BucketBinding(
  bucket_name: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding.property.bucketName">bucket_name</a></code> | <code>str</code> | The name of the Bucket to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The name of the Bucket to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#bucket_name WorkersScript#bucket_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#name WorkersScript#name}

---

### WorkersScriptSecretTextBinding <a name="WorkersScriptSecretTextBinding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptSecretTextBinding(
  name: str,
  text: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding.property.text">text</a></code> | <code>str</code> | The secret text you want to store. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#name WorkersScript#name}

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding.property.text"></a>

```python
text: str
```

- *Type:* str

The secret text you want to store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#text WorkersScript#text}

---

### WorkersScriptServiceBinding <a name="WorkersScriptServiceBinding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptServiceBinding(
  name: str,
  service: str,
  environment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding.property.service">service</a></code> | <code>str</code> | The name of the Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding.property.environment">environment</a></code> | <code>str</code> | The name of the Worker environment to bind to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#name WorkersScript#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding.property.service"></a>

```python
service: str
```

- *Type:* str

The name of the Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#service WorkersScript#service}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding.property.environment"></a>

```python
environment: str
```

- *Type:* str

The name of the Worker environment to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#environment WorkersScript#environment}

---

### WorkersScriptWebassemblyBinding <a name="WorkersScriptWebassemblyBinding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptWebassemblyBinding(
  module: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding.property.module">module</a></code> | <code>str</code> | The base64 encoded wasm module you want to store. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding.property.name">name</a></code> | <code>str</code> | The global variable for the binding in your Worker code. |

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding.property.module"></a>

```python
module: str
```

- *Type:* str

The base64 encoded wasm module you want to store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#module WorkersScript#module}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding.property.name"></a>

```python
name: str
```

- *Type:* str

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/workers_script#name WorkersScript#name}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkersScriptAnalyticsEngineBindingList <a name="WorkersScriptAnalyticsEngineBindingList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptAnalyticsEngineBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptAnalyticsEngineBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding">WorkersScriptAnalyticsEngineBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkersScriptAnalyticsEngineBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding">WorkersScriptAnalyticsEngineBinding</a>]]

---


### WorkersScriptAnalyticsEngineBindingOutputReference <a name="WorkersScriptAnalyticsEngineBindingOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptAnalyticsEngineBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding">WorkersScriptAnalyticsEngineBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkersScriptAnalyticsEngineBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAnalyticsEngineBinding">WorkersScriptAnalyticsEngineBinding</a>]

---


### WorkersScriptD1DatabaseBindingList <a name="WorkersScriptD1DatabaseBindingList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptD1DatabaseBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptD1DatabaseBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding">WorkersScriptD1DatabaseBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkersScriptD1DatabaseBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding">WorkersScriptD1DatabaseBinding</a>]]

---


### WorkersScriptD1DatabaseBindingOutputReference <a name="WorkersScriptD1DatabaseBindingOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptD1DatabaseBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding">WorkersScriptD1DatabaseBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkersScriptD1DatabaseBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptD1DatabaseBinding">WorkersScriptD1DatabaseBinding</a>]

---


### WorkersScriptHyperdriveConfigBindingList <a name="WorkersScriptHyperdriveConfigBindingList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptHyperdriveConfigBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptHyperdriveConfigBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding">WorkersScriptHyperdriveConfigBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkersScriptHyperdriveConfigBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding">WorkersScriptHyperdriveConfigBinding</a>]]

---


### WorkersScriptHyperdriveConfigBindingOutputReference <a name="WorkersScriptHyperdriveConfigBindingOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptHyperdriveConfigBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.property.bindingInput">binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.property.binding">binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding">WorkersScriptHyperdriveConfigBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binding_input`<sup>Optional</sup> <a name="binding_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.property.bindingInput"></a>

```python
binding_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.property.binding"></a>

```python
binding: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkersScriptHyperdriveConfigBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptHyperdriveConfigBinding">WorkersScriptHyperdriveConfigBinding</a>]

---


### WorkersScriptKvNamespaceBindingList <a name="WorkersScriptKvNamespaceBindingList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptKvNamespaceBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptKvNamespaceBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding">WorkersScriptKvNamespaceBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkersScriptKvNamespaceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding">WorkersScriptKvNamespaceBinding</a>]]

---


### WorkersScriptKvNamespaceBindingOutputReference <a name="WorkersScriptKvNamespaceBindingOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptKvNamespaceBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding">WorkersScriptKvNamespaceBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkersScriptKvNamespaceBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptKvNamespaceBinding">WorkersScriptKvNamespaceBinding</a>]

---


### WorkersScriptPlacementList <a name="WorkersScriptPlacementList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptPlacementList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptPlacementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkersScriptPlacement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>]]

---


### WorkersScriptPlacementOutputReference <a name="WorkersScriptPlacementOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptPlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkersScriptPlacement]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>]

---


### WorkersScriptPlainTextBindingList <a name="WorkersScriptPlainTextBindingList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptPlainTextBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptPlainTextBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding">WorkersScriptPlainTextBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkersScriptPlainTextBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding">WorkersScriptPlainTextBinding</a>]]

---


### WorkersScriptPlainTextBindingOutputReference <a name="WorkersScriptPlainTextBindingOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptPlainTextBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding">WorkersScriptPlainTextBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkersScriptPlainTextBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlainTextBinding">WorkersScriptPlainTextBinding</a>]

---


### WorkersScriptQueueBindingList <a name="WorkersScriptQueueBindingList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptQueueBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptQueueBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding">WorkersScriptQueueBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkersScriptQueueBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding">WorkersScriptQueueBinding</a>]]

---


### WorkersScriptQueueBindingOutputReference <a name="WorkersScriptQueueBindingOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptQueueBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.property.bindingInput">binding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.property.queueInput">queue_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.property.binding">binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.property.queue">queue</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding">WorkersScriptQueueBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binding_input`<sup>Optional</sup> <a name="binding_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.property.bindingInput"></a>

```python
binding_input: str
```

- *Type:* str

---

##### `queue_input`<sup>Optional</sup> <a name="queue_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.property.queueInput"></a>

```python
queue_input: str
```

- *Type:* str

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.property.binding"></a>

```python
binding: str
```

- *Type:* str

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.property.queue"></a>

```python
queue: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkersScriptQueueBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptQueueBinding">WorkersScriptQueueBinding</a>]

---


### WorkersScriptR2BucketBindingList <a name="WorkersScriptR2BucketBindingList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptR2BucketBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptR2BucketBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding">WorkersScriptR2BucketBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkersScriptR2BucketBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding">WorkersScriptR2BucketBinding</a>]]

---


### WorkersScriptR2BucketBindingOutputReference <a name="WorkersScriptR2BucketBindingOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptR2BucketBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding">WorkersScriptR2BucketBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkersScriptR2BucketBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptR2BucketBinding">WorkersScriptR2BucketBinding</a>]

---


### WorkersScriptSecretTextBindingList <a name="WorkersScriptSecretTextBindingList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptSecretTextBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptSecretTextBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding">WorkersScriptSecretTextBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkersScriptSecretTextBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding">WorkersScriptSecretTextBinding</a>]]

---


### WorkersScriptSecretTextBindingOutputReference <a name="WorkersScriptSecretTextBindingOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptSecretTextBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding">WorkersScriptSecretTextBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkersScriptSecretTextBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptSecretTextBinding">WorkersScriptSecretTextBinding</a>]

---


### WorkersScriptServiceBindingList <a name="WorkersScriptServiceBindingList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptServiceBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptServiceBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding">WorkersScriptServiceBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkersScriptServiceBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding">WorkersScriptServiceBinding</a>]]

---


### WorkersScriptServiceBindingOutputReference <a name="WorkersScriptServiceBindingOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptServiceBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding">WorkersScriptServiceBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkersScriptServiceBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptServiceBinding">WorkersScriptServiceBinding</a>]

---


### WorkersScriptWebassemblyBindingList <a name="WorkersScriptWebassemblyBindingList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptWebassemblyBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptWebassemblyBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding">WorkersScriptWebassemblyBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkersScriptWebassemblyBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding">WorkersScriptWebassemblyBinding</a>]]

---


### WorkersScriptWebassemblyBindingOutputReference <a name="WorkersScriptWebassemblyBindingOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptWebassemblyBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.property.moduleInput">module_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.property.module">module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding">WorkersScriptWebassemblyBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_input`<sup>Optional</sup> <a name="module_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.property.moduleInput"></a>

```python
module_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.property.module"></a>

```python
module: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkersScriptWebassemblyBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptWebassemblyBinding">WorkersScriptWebassemblyBinding</a>]

---



