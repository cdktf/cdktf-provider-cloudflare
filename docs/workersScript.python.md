# `workersScript` Submodule <a name="`workersScript` Submodule" id="@cdktf/provider-cloudflare.workersScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkersScript <a name="WorkersScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScript"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script cloudflare_workers_script}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScript(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  script_name: str,
  assets: WorkersScriptAssets = None,
  bindings: IResolvable | typing.List[WorkersScriptBindings] = None,
  body_part: str = None,
  compatibility_date: str = None,
  compatibility_flags: typing.List[str] = None,
  content: str = None,
  content_file: str = None,
  content_sha256: str = None,
  content_type: str = None,
  keep_assets: bool | IResolvable = None,
  keep_bindings: typing.List[str] = None,
  limits: WorkersScriptLimits = None,
  logpush: bool | IResolvable = None,
  main_module: str = None,
  migrations: WorkersScriptMigrations = None,
  observability: WorkersScriptObservability = None,
  placement: WorkersScriptPlacement = None,
  tail_consumers: IResolvable | typing.List[WorkersScriptTailConsumers] = None,
  usage_model: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.scriptName">script_name</a></code> | <code>str</code> | Name of the script, used in URLs and route configuration. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.assets">assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.bindings">bindings</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>]</code> | List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.bodyPart">body_part</a></code> | <code>str</code> | Name of the uploaded file that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.compatibilityDate">compatibility_date</a></code> | <code>str</code> | Date indicating targeted support in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | Flags that enable or disable certain features in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.content">content</a></code> | <code>str</code> | Module or Service Worker contents of the Worker. Conflicts with `content_file`. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.contentFile">content_file</a></code> | <code>str</code> | Path to a file containing the Module or Service Worker contents of the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.contentSha256">content_sha256</a></code> | <code>str</code> | SHA-256 hash of the Worker contents. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python"). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.keepAssets">keep_assets</a></code> | <code>bool \| cdktf.IResolvable</code> | Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.keepBindings">keep_bindings</a></code> | <code>typing.List[str]</code> | List of binding types to keep from previous_upload. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.limits">limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a></code> | Limits to apply for this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.logpush">logpush</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether Logpush is turned on for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.mainModule">main_module</a></code> | <code>str</code> | Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.migrations">migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a></code> | Migrations to apply for Durable Objects associated with this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.observability">observability</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a></code> | Observability settings for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a></code> | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.tailConsumers">tail_consumers</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>]</code> | List of Workers that will consume logs from the attached Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.usageModel">usage_model</a></code> | <code>str</code> | Usage model for the Worker invocations. Available values: "standard", "bundled", "unbound". |

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

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

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

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#account_id WorkersScript#account_id}

---

##### `script_name`<sup>Required</sup> <a name="script_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.scriptName"></a>

- *Type:* str

Name of the script, used in URLs and route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#script_name WorkersScript#script_name}

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.assets"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#assets WorkersScript#assets}

---

##### `bindings`<sup>Optional</sup> <a name="bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.bindings"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>]

List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#bindings WorkersScript#bindings}

---

##### `body_part`<sup>Optional</sup> <a name="body_part" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.bodyPart"></a>

- *Type:* str

Name of the uploaded file that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#body_part WorkersScript#body_part}

---

##### `compatibility_date`<sup>Optional</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.compatibilityDate"></a>

- *Type:* str

Date indicating targeted support in the Workers runtime.

Backwards incompatible fixes to the runtime following this date will not affect this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#compatibility_date WorkersScript#compatibility_date}

---

##### `compatibility_flags`<sup>Optional</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.compatibilityFlags"></a>

- *Type:* typing.List[str]

Flags that enable or disable certain features in the Workers runtime.

Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#compatibility_flags WorkersScript#compatibility_flags}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.content"></a>

- *Type:* str

Module or Service Worker contents of the Worker. Conflicts with `content_file`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#content WorkersScript#content}

---

##### `content_file`<sup>Optional</sup> <a name="content_file" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.contentFile"></a>

- *Type:* str

Path to a file containing the Module or Service Worker contents of the Worker.

Conflicts with `content`. Must be paired with `content_sha256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#content_file WorkersScript#content_file}

---

##### `content_sha256`<sup>Optional</sup> <a name="content_sha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.contentSha256"></a>

- *Type:* str

SHA-256 hash of the Worker contents.

Used to trigger updates when source code changes. Must be provided when `content_file` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#content_sha256 WorkersScript#content_sha256}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.contentType"></a>

- *Type:* str

Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#content_type WorkersScript#content_type}

---

##### `keep_assets`<sup>Optional</sup> <a name="keep_assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.keepAssets"></a>

- *Type:* bool | cdktf.IResolvable

Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#keep_assets WorkersScript#keep_assets}

---

##### `keep_bindings`<sup>Optional</sup> <a name="keep_bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.keepBindings"></a>

- *Type:* typing.List[str]

List of binding types to keep from previous_upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#keep_bindings WorkersScript#keep_bindings}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.limits"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a>

Limits to apply for this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#limits WorkersScript#limits}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.logpush"></a>

- *Type:* bool | cdktf.IResolvable

Whether Logpush is turned on for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#logpush WorkersScript#logpush}

---

##### `main_module`<sup>Optional</sup> <a name="main_module" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.mainModule"></a>

- *Type:* str

Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#main_module WorkersScript#main_module}

---

##### `migrations`<sup>Optional</sup> <a name="migrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.migrations"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

Migrations to apply for Durable Objects associated with this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#migrations WorkersScript#migrations}

---

##### `observability`<sup>Optional</sup> <a name="observability" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.observability"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

Observability settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#observability WorkersScript#observability}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.placement"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#placement WorkersScript#placement}

---

##### `tail_consumers`<sup>Optional</sup> <a name="tail_consumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.tailConsumers"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>]

List of Workers that will consume logs from the attached Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#tail_consumers WorkersScript#tail_consumers}

---

##### `usage_model`<sup>Optional</sup> <a name="usage_model" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.usageModel"></a>

- *Type:* str

Usage model for the Worker invocations. Available values: "standard", "bundled", "unbound".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#usage_model WorkersScript#usage_model}

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
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putAssets">put_assets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putBindings">put_bindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putLimits">put_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations">put_migrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putObservability">put_observability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlacement">put_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putTailConsumers">put_tail_consumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetAssets">reset_assets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBindings">reset_bindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBodyPart">reset_body_part</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityDate">reset_compatibility_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityFlags">reset_compatibility_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentFile">reset_content_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentSha256">reset_content_sha256</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepAssets">reset_keep_assets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepBindings">reset_keep_bindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLimits">reset_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLogpush">reset_logpush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMainModule">reset_main_module</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMigrations">reset_migrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetObservability">reset_observability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetPlacement">reset_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetTailConsumers">reset_tail_consumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetUsageModel">reset_usage_model</a></code> | *No description.* |

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
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
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
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

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

##### `put_assets` <a name="put_assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putAssets"></a>

```python
def put_assets(
  config: WorkersScriptAssetsConfig = None,
  directory: str = None,
  jwt: str = None
) -> None
```

###### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putAssets.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#config WorkersScript#config}

---

###### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putAssets.parameter.directory"></a>

- *Type:* str

Path to the directory containing asset files to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#directory WorkersScript#directory}

---

###### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putAssets.parameter.jwt"></a>

- *Type:* str

Token provided upon successful upload of all files from a registered manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#jwt WorkersScript#jwt}

---

##### `put_bindings` <a name="put_bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putBindings"></a>

```python
def put_bindings(
  value: IResolvable | typing.List[WorkersScriptBindings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putBindings.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>]

---

##### `put_limits` <a name="put_limits" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putLimits"></a>

```python
def put_limits(
  cpu_ms: typing.Union[int, float] = None
) -> None
```

###### `cpu_ms`<sup>Optional</sup> <a name="cpu_ms" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putLimits.parameter.cpuMs"></a>

- *Type:* typing.Union[int, float]

The amount of CPU time this Worker can use in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#cpu_ms WorkersScript#cpu_ms}

---

##### `put_migrations` <a name="put_migrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations"></a>

```python
def put_migrations(
  deleted_classes: typing.List[str] = None,
  new_classes: typing.List[str] = None,
  new_sqlite_classes: typing.List[str] = None,
  new_tag: str = None,
  old_tag: str = None,
  renamed_classes: IResolvable | typing.List[WorkersScriptMigrationsRenamedClasses] = None,
  steps: IResolvable | typing.List[WorkersScriptMigrationsSteps] = None,
  transferred_classes: IResolvable | typing.List[WorkersScriptMigrationsTransferredClasses] = None
) -> None
```

###### `deleted_classes`<sup>Optional</sup> <a name="deleted_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations.parameter.deletedClasses"></a>

- *Type:* typing.List[str]

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#deleted_classes WorkersScript#deleted_classes}

---

###### `new_classes`<sup>Optional</sup> <a name="new_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations.parameter.newClasses"></a>

- *Type:* typing.List[str]

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#new_classes WorkersScript#new_classes}

---

###### `new_sqlite_classes`<sup>Optional</sup> <a name="new_sqlite_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations.parameter.newSqliteClasses"></a>

- *Type:* typing.List[str]

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#new_sqlite_classes WorkersScript#new_sqlite_classes}

---

###### `new_tag`<sup>Optional</sup> <a name="new_tag" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations.parameter.newTag"></a>

- *Type:* str

Tag to set as the latest migration tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#new_tag WorkersScript#new_tag}

---

###### `old_tag`<sup>Optional</sup> <a name="old_tag" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations.parameter.oldTag"></a>

- *Type:* str

Tag used to verify against the latest migration tag for this Worker.

If they don't match, the upload is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#old_tag WorkersScript#old_tag}

---

###### `renamed_classes`<sup>Optional</sup> <a name="renamed_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations.parameter.renamedClasses"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>]

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#renamed_classes WorkersScript#renamed_classes}

---

###### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations.parameter.steps"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>]

Migrations to apply in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#steps WorkersScript#steps}

---

###### `transferred_classes`<sup>Optional</sup> <a name="transferred_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations.parameter.transferredClasses"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>]

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#transferred_classes WorkersScript#transferred_classes}

---

##### `put_observability` <a name="put_observability" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putObservability"></a>

```python
def put_observability(
  enabled: bool | IResolvable,
  head_sampling_rate: typing.Union[int, float] = None,
  logs: WorkersScriptObservabilityLogs = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putObservability.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether observability is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#enabled WorkersScript#enabled}

---

###### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putObservability.parameter.headSamplingRate"></a>

- *Type:* typing.Union[int, float]

The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}

---

###### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putObservability.parameter.logs"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

Log settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#logs WorkersScript#logs}

---

##### `put_placement` <a name="put_placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlacement"></a>

```python
def put_placement(
  mode: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlacement.parameter.mode"></a>

- *Type:* str

Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#mode WorkersScript#mode}

---

##### `put_tail_consumers` <a name="put_tail_consumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putTailConsumers"></a>

```python
def put_tail_consumers(
  value: IResolvable | typing.List[WorkersScriptTailConsumers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putTailConsumers.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>]

---

##### `reset_assets` <a name="reset_assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetAssets"></a>

```python
def reset_assets() -> None
```

##### `reset_bindings` <a name="reset_bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBindings"></a>

```python
def reset_bindings() -> None
```

##### `reset_body_part` <a name="reset_body_part" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBodyPart"></a>

```python
def reset_body_part() -> None
```

##### `reset_compatibility_date` <a name="reset_compatibility_date" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityDate"></a>

```python
def reset_compatibility_date() -> None
```

##### `reset_compatibility_flags` <a name="reset_compatibility_flags" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityFlags"></a>

```python
def reset_compatibility_flags() -> None
```

##### `reset_content` <a name="reset_content" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_file` <a name="reset_content_file" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentFile"></a>

```python
def reset_content_file() -> None
```

##### `reset_content_sha256` <a name="reset_content_sha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentSha256"></a>

```python
def reset_content_sha256() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_keep_assets` <a name="reset_keep_assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepAssets"></a>

```python
def reset_keep_assets() -> None
```

##### `reset_keep_bindings` <a name="reset_keep_bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepBindings"></a>

```python
def reset_keep_bindings() -> None
```

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLimits"></a>

```python
def reset_limits() -> None
```

##### `reset_logpush` <a name="reset_logpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLogpush"></a>

```python
def reset_logpush() -> None
```

##### `reset_main_module` <a name="reset_main_module" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMainModule"></a>

```python
def reset_main_module() -> None
```

##### `reset_migrations` <a name="reset_migrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMigrations"></a>

```python
def reset_migrations() -> None
```

##### `reset_observability` <a name="reset_observability" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetObservability"></a>

```python
def reset_observability() -> None
```

##### `reset_placement` <a name="reset_placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetPlacement"></a>

```python
def reset_placement() -> None
```

##### `reset_tail_consumers` <a name="reset_tail_consumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetTailConsumers"></a>

```python
def reset_tail_consumers() -> None
```

##### `reset_usage_model` <a name="reset_usage_model" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetUsageModel"></a>

```python
def reset_usage_model() -> None
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

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference">WorkersScriptAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindings">bindings</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList">WorkersScriptBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.handlers">handlers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasAssets">has_assets</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasModules">has_modules</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.lastDeployedFrom">last_deployed_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference">WorkersScriptLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrations">migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference">WorkersScriptMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrationTag">migration_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.namedHandlers">named_handlers</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList">WorkersScriptNamedHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observability">observability</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference">WorkersScriptObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference">WorkersScriptPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.startupTimeMs">startup_time_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumers">tail_consumers</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList">WorkersScriptTailConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assetsInput">assets_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindingsInput">bindings_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPartInput">body_part_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDateInput">compatibility_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlagsInput">compatibility_flags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFileInput">content_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256Input">content_sha256_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssetsInput">keep_assets_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindingsInput">keep_bindings_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.limitsInput">limits_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpushInput">logpush_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModuleInput">main_module_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrationsInput">migrations_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observabilityInput">observability_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placementInput">placement_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptNameInput">script_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumersInput">tail_consumers_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModelInput">usage_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPart">body_part</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDate">compatibility_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFile">content_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256">content_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssets">keep_assets</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindings">keep_bindings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpush">logpush</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModule">main_module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptName">script_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModel">usage_model</a></code> | <code>str</code> | *No description.* |

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
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

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
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `assets`<sup>Required</sup> <a name="assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assets"></a>

```python
assets: WorkersScriptAssetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference">WorkersScriptAssetsOutputReference</a>

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindings"></a>

```python
bindings: WorkersScriptBindingsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList">WorkersScriptBindingsList</a>

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `handlers`<sup>Required</sup> <a name="handlers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.handlers"></a>

```python
handlers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `has_assets`<sup>Required</sup> <a name="has_assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasAssets"></a>

```python
has_assets: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `has_modules`<sup>Required</sup> <a name="has_modules" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasModules"></a>

```python
has_modules: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_deployed_from`<sup>Required</sup> <a name="last_deployed_from" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.lastDeployedFrom"></a>

```python
last_deployed_from: str
```

- *Type:* str

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.limits"></a>

```python
limits: WorkersScriptLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference">WorkersScriptLimitsOutputReference</a>

---

##### `migrations`<sup>Required</sup> <a name="migrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrations"></a>

```python
migrations: WorkersScriptMigrationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference">WorkersScriptMigrationsOutputReference</a>

---

##### `migration_tag`<sup>Required</sup> <a name="migration_tag" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrationTag"></a>

```python
migration_tag: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `named_handlers`<sup>Required</sup> <a name="named_handlers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.namedHandlers"></a>

```python
named_handlers: WorkersScriptNamedHandlersList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList">WorkersScriptNamedHandlersList</a>

---

##### `observability`<sup>Required</sup> <a name="observability" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observability"></a>

```python
observability: WorkersScriptObservabilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference">WorkersScriptObservabilityOutputReference</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placement"></a>

```python
placement: WorkersScriptPlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference">WorkersScriptPlacementOutputReference</a>

---

##### `startup_time_ms`<sup>Required</sup> <a name="startup_time_ms" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.startupTimeMs"></a>

```python
startup_time_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tail_consumers`<sup>Required</sup> <a name="tail_consumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumers"></a>

```python
tail_consumers: WorkersScriptTailConsumersList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList">WorkersScriptTailConsumersList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `assets_input`<sup>Optional</sup> <a name="assets_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assetsInput"></a>

```python
assets_input: IResolvable | WorkersScriptAssets
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

---

##### `bindings_input`<sup>Optional</sup> <a name="bindings_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindingsInput"></a>

```python
bindings_input: IResolvable | typing.List[WorkersScriptBindings]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>]

---

##### `body_part_input`<sup>Optional</sup> <a name="body_part_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPartInput"></a>

```python
body_part_input: str
```

- *Type:* str

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

##### `content_file_input`<sup>Optional</sup> <a name="content_file_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFileInput"></a>

```python
content_file_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_sha256_input`<sup>Optional</sup> <a name="content_sha256_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256Input"></a>

```python
content_sha256_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `keep_assets_input`<sup>Optional</sup> <a name="keep_assets_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssetsInput"></a>

```python
keep_assets_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `keep_bindings_input`<sup>Optional</sup> <a name="keep_bindings_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindingsInput"></a>

```python
keep_bindings_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.limitsInput"></a>

```python
limits_input: IResolvable | WorkersScriptLimits
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a>

---

##### `logpush_input`<sup>Optional</sup> <a name="logpush_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpushInput"></a>

```python
logpush_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `main_module_input`<sup>Optional</sup> <a name="main_module_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModuleInput"></a>

```python
main_module_input: str
```

- *Type:* str

---

##### `migrations_input`<sup>Optional</sup> <a name="migrations_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrationsInput"></a>

```python
migrations_input: IResolvable | WorkersScriptMigrations
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

---

##### `observability_input`<sup>Optional</sup> <a name="observability_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observabilityInput"></a>

```python
observability_input: IResolvable | WorkersScriptObservability
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

---

##### `placement_input`<sup>Optional</sup> <a name="placement_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placementInput"></a>

```python
placement_input: IResolvable | WorkersScriptPlacement
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

---

##### `script_name_input`<sup>Optional</sup> <a name="script_name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptNameInput"></a>

```python
script_name_input: str
```

- *Type:* str

---

##### `tail_consumers_input`<sup>Optional</sup> <a name="tail_consumers_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumersInput"></a>

```python
tail_consumers_input: IResolvable | typing.List[WorkersScriptTailConsumers]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>]

---

##### `usage_model_input`<sup>Optional</sup> <a name="usage_model_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModelInput"></a>

```python
usage_model_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `body_part`<sup>Required</sup> <a name="body_part" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPart"></a>

```python
body_part: str
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

##### `content_file`<sup>Required</sup> <a name="content_file" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFile"></a>

```python
content_file: str
```

- *Type:* str

---

##### `content_sha256`<sup>Required</sup> <a name="content_sha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256"></a>

```python
content_sha256: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `keep_assets`<sup>Required</sup> <a name="keep_assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssets"></a>

```python
keep_assets: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `keep_bindings`<sup>Required</sup> <a name="keep_bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindings"></a>

```python
keep_bindings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logpush`<sup>Required</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpush"></a>

```python
logpush: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `main_module`<sup>Required</sup> <a name="main_module" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModule"></a>

```python
main_module: str
```

- *Type:* str

---

##### `script_name`<sup>Required</sup> <a name="script_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptName"></a>

```python
script_name: str
```

- *Type:* str

---

##### `usage_model`<sup>Required</sup> <a name="usage_model" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModel"></a>

```python
usage_model: str
```

- *Type:* str

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

### WorkersScriptAssets <a name="WorkersScriptAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptAssets(
  config: WorkersScriptAssetsConfig = None,
  directory: str = None,
  jwt: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.directory">directory</a></code> | <code>str</code> | Path to the directory containing asset files to upload. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.jwt">jwt</a></code> | <code>str</code> | Token provided upon successful upload of all files from a registered manifest. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.config"></a>

```python
config: WorkersScriptAssetsConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#config WorkersScript#config}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.directory"></a>

```python
directory: str
```

- *Type:* str

Path to the directory containing asset files to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#directory WorkersScript#directory}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.jwt"></a>

```python
jwt: str
```

- *Type:* str

Token provided upon successful upload of all files from a registered manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#jwt WorkersScript#jwt}

---

### WorkersScriptAssetsConfig <a name="WorkersScriptAssetsConfig" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptAssetsConfig(
  headers: str = None,
  html_handling: str = None,
  not_found_handling: str = None,
  redirects: str = None,
  run_worker_first: typing.Mapping[typing.Any] = None,
  serve_directly: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.headers">headers</a></code> | <code>str</code> | The contents of a _headers file (used to attach custom headers on asset responses). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.htmlHandling">html_handling</a></code> | <code>str</code> | Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.notFoundHandling">not_found_handling</a></code> | <code>str</code> | Determines the response when a request does not match a static asset, and there is no Worker script. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.redirects">redirects</a></code> | <code>str</code> | The contents of a _redirects file (used to apply redirects or proxy paths ahead of asset serving). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.runWorkerFirst">run_worker_first</a></code> | <code>typing.Mapping[typing.Any]</code> | When a boolean true, requests will always invoke the Worker script. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.serveDirectly">serve_directly</a></code> | <code>bool \| cdktf.IResolvable</code> | When true and the incoming request matches an asset, that will be served instead of invoking the Worker script. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.headers"></a>

```python
headers: str
```

- *Type:* str

The contents of a _headers file (used to attach custom headers on asset responses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#headers WorkersScript#headers}

---

##### `html_handling`<sup>Optional</sup> <a name="html_handling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.htmlHandling"></a>

```python
html_handling: str
```

- *Type:* str

Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#html_handling WorkersScript#html_handling}

---

##### `not_found_handling`<sup>Optional</sup> <a name="not_found_handling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.notFoundHandling"></a>

```python
not_found_handling: str
```

- *Type:* str

Determines the response when a request does not match a static asset, and there is no Worker script.

Available values: "none", "404-page", "single-page-application".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#not_found_handling WorkersScript#not_found_handling}

---

##### `redirects`<sup>Optional</sup> <a name="redirects" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.redirects"></a>

```python
redirects: str
```

- *Type:* str

The contents of a _redirects file (used to apply redirects or proxy paths ahead of asset serving).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#redirects WorkersScript#redirects}

---

##### `run_worker_first`<sup>Optional</sup> <a name="run_worker_first" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.runWorkerFirst"></a>

```python
run_worker_first: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

When a boolean true, requests will always invoke the Worker script.

Otherwise, attempt to serve an asset matching the request, falling back to the Worker script. When a list of strings, contains path rules to control routing to either the Worker or assets. Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#run_worker_first WorkersScript#run_worker_first}

---

##### `serve_directly`<sup>Optional</sup> <a name="serve_directly" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.serveDirectly"></a>

```python
serve_directly: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When true and the incoming request matches an asset, that will be served instead of invoking the Worker script.

When false, requests will always invoke the Worker script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#serve_directly WorkersScript#serve_directly}

---

### WorkersScriptBindings <a name="WorkersScriptBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptBindings(
  name: str,
  type: str,
  algorithm: str = None,
  allowed_destination_addresses: typing.List[str] = None,
  allowed_sender_addresses: typing.List[str] = None,
  bucket_name: str = None,
  certificate_id: str = None,
  class_name: str = None,
  dataset: str = None,
  destination_address: str = None,
  environment: str = None,
  format: str = None,
  id: str = None,
  index_name: str = None,
  json: str = None,
  jurisdiction: str = None,
  key_base64: str = None,
  key_jwk: str = None,
  namespace: str = None,
  namespace_id: str = None,
  old_name: str = None,
  outbound: WorkersScriptBindingsOutbound = None,
  part: str = None,
  pipeline: str = None,
  queue_name: str = None,
  script_name: str = None,
  secret_name: str = None,
  service: str = None,
  store_id: str = None,
  text: str = None,
  usages: typing.List[str] = None,
  version_id: str = None,
  workflow_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.name">name</a></code> | <code>str</code> | A JavaScript variable name for the binding. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.type">type</a></code> | <code>str</code> | The kind of resource that the binding provides. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.algorithm">algorithm</a></code> | <code>str</code> | Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedDestinationAddresses">allowed_destination_addresses</a></code> | <code>typing.List[str]</code> | List of allowed destination addresses. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedSenderAddresses">allowed_sender_addresses</a></code> | <code>typing.List[str]</code> | List of allowed sender addresses. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.bucketName">bucket_name</a></code> | <code>str</code> | R2 bucket to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.certificateId">certificate_id</a></code> | <code>str</code> | Identifier of the certificate to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.className">class_name</a></code> | <code>str</code> | The exported class name of the Durable Object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.dataset">dataset</a></code> | <code>str</code> | The name of the dataset to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.destinationAddress">destination_address</a></code> | <code>str</code> | Destination address for the email. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.environment">environment</a></code> | <code>str</code> | The environment of the script_name to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.format">format</a></code> | <code>str</code> | Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.id">id</a></code> | <code>str</code> | Identifier of the D1 database to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.indexName">index_name</a></code> | <code>str</code> | Name of the Vectorize index to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.json">json</a></code> | <code>str</code> | JSON data to use. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.jurisdiction">jurisdiction</a></code> | <code>str</code> | The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket. Available values: "eu", "fedramp". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyBase64">key_base64</a></code> | <code>str</code> | Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyJwk">key_jwk</a></code> | <code>str</code> | Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespace">namespace</a></code> | <code>str</code> | The name of the dispatch namespace. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespaceId">namespace_id</a></code> | <code>str</code> | Namespace identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.oldName">old_name</a></code> | <code>str</code> | The old name of the inherited binding. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.outbound">outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a></code> | Outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.part">part</a></code> | <code>str</code> | The name of the file containing the data content. Only accepted for `service worker syntax` Workers. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.pipeline">pipeline</a></code> | <code>str</code> | Name of the Pipeline to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.queueName">queue_name</a></code> | <code>str</code> | Name of the Queue to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.scriptName">script_name</a></code> | <code>str</code> | The script where the Durable Object is defined, if it is external to this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.secretName">secret_name</a></code> | <code>str</code> | Name of the secret in the store. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.service">service</a></code> | <code>str</code> | Name of Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.storeId">store_id</a></code> | <code>str</code> | ID of the store containing the secret. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.text">text</a></code> | <code>str</code> | The text value to use. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.usages">usages</a></code> | <code>typing.List[str]</code> | Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.versionId">version_id</a></code> | <code>str</code> | Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.workflowName">workflow_name</a></code> | <code>str</code> | Name of the Workflow to bind to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.name"></a>

```python
name: str
```

- *Type:* str

A JavaScript variable name for the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#name WorkersScript#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.type"></a>

```python
type: str
```

- *Type:* str

The kind of resource that the binding provides.

Available values: "ai", "analytics_engine", "assets", "browser", "d1", "data_blob", "dispatch_namespace", "durable_object_namespace", "hyperdrive", "inherit", "images", "json", "kv_namespace", "mtls_certificate", "plain_text", "pipelines", "queue", "r2_bucket", "secret_text", "send_email", "service", "tail_consumer", "text_blob", "vectorize", "version_metadata", "secrets_store_secret", "secret_key", "workflow", "wasm_module".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#type WorkersScript#type}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#algorithm WorkersScript#algorithm}

---

##### `allowed_destination_addresses`<sup>Optional</sup> <a name="allowed_destination_addresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedDestinationAddresses"></a>

```python
allowed_destination_addresses: typing.List[str]
```

- *Type:* typing.List[str]

List of allowed destination addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#allowed_destination_addresses WorkersScript#allowed_destination_addresses}

---

##### `allowed_sender_addresses`<sup>Optional</sup> <a name="allowed_sender_addresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedSenderAddresses"></a>

```python
allowed_sender_addresses: typing.List[str]
```

- *Type:* typing.List[str]

List of allowed sender addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#allowed_sender_addresses WorkersScript#allowed_sender_addresses}

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

R2 bucket to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#bucket_name WorkersScript#bucket_name}

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

Identifier of the certificate to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#certificate_id WorkersScript#certificate_id}

---

##### `class_name`<sup>Optional</sup> <a name="class_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.className"></a>

```python
class_name: str
```

- *Type:* str

The exported class name of the Durable Object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#class_name WorkersScript#class_name}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

The name of the dataset to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#dataset WorkersScript#dataset}

---

##### `destination_address`<sup>Optional</sup> <a name="destination_address" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.destinationAddress"></a>

```python
destination_address: str
```

- *Type:* str

Destination address for the email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#destination_address WorkersScript#destination_address}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.environment"></a>

```python
environment: str
```

- *Type:* str

The environment of the script_name to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#environment WorkersScript#environment}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.format"></a>

```python
format: str
```

- *Type:* str

Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#format WorkersScript#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.id"></a>

```python
id: str
```

- *Type:* str

Identifier of the D1 database to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#id WorkersScript#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index_name`<sup>Optional</sup> <a name="index_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

Name of the Vectorize index to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#index_name WorkersScript#index_name}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.json"></a>

```python
json: str
```

- *Type:* str

JSON data to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#json WorkersScript#json}

---

##### `jurisdiction`<sup>Optional</sup> <a name="jurisdiction" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.jurisdiction"></a>

```python
jurisdiction: str
```

- *Type:* str

The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket. Available values: "eu", "fedramp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#jurisdiction WorkersScript#jurisdiction}

---

##### `key_base64`<sup>Optional</sup> <a name="key_base64" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyBase64"></a>

```python
key_base64: str
```

- *Type:* str

Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#key_base64 WorkersScript#key_base64}

---

##### `key_jwk`<sup>Optional</sup> <a name="key_jwk" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyJwk"></a>

```python
key_jwk: str
```

- *Type:* str

Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#key_jwk WorkersScript#key_jwk}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The name of the dispatch namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#namespace WorkersScript#namespace}

---

##### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

Namespace identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#namespace_id WorkersScript#namespace_id}

---

##### `old_name`<sup>Optional</sup> <a name="old_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.oldName"></a>

```python
old_name: str
```

- *Type:* str

The old name of the inherited binding.

If set, the binding will be renamed from `old_name` to `name` in the new version. If not set, the binding will keep the same name between versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#old_name WorkersScript#old_name}

---

##### `outbound`<sup>Optional</sup> <a name="outbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.outbound"></a>

```python
outbound: WorkersScriptBindingsOutbound
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#outbound WorkersScript#outbound}

---

##### `part`<sup>Optional</sup> <a name="part" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.part"></a>

```python
part: str
```

- *Type:* str

The name of the file containing the data content. Only accepted for `service worker syntax` Workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#part WorkersScript#part}

---

##### `pipeline`<sup>Optional</sup> <a name="pipeline" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.pipeline"></a>

```python
pipeline: str
```

- *Type:* str

Name of the Pipeline to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#pipeline WorkersScript#pipeline}

---

##### `queue_name`<sup>Optional</sup> <a name="queue_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

Name of the Queue to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#queue_name WorkersScript#queue_name}

---

##### `script_name`<sup>Optional</sup> <a name="script_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.scriptName"></a>

```python
script_name: str
```

- *Type:* str

The script where the Durable Object is defined, if it is external to this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#script_name WorkersScript#script_name}

---

##### `secret_name`<sup>Optional</sup> <a name="secret_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Name of the secret in the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#secret_name WorkersScript#secret_name}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.service"></a>

```python
service: str
```

- *Type:* str

Name of Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#service WorkersScript#service}

---

##### `store_id`<sup>Optional</sup> <a name="store_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.storeId"></a>

```python
store_id: str
```

- *Type:* str

ID of the store containing the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#store_id WorkersScript#store_id}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.text"></a>

```python
text: str
```

- *Type:* str

The text value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#text WorkersScript#text}

---

##### `usages`<sup>Optional</sup> <a name="usages" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.usages"></a>

```python
usages: typing.List[str]
```

- *Type:* typing.List[str]

Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#usages WorkersScript#usages}

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version.

Defaults to inheriting the binding from the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#version_id WorkersScript#version_id}

---

##### `workflow_name`<sup>Optional</sup> <a name="workflow_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.workflowName"></a>

```python
workflow_name: str
```

- *Type:* str

Name of the Workflow to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#workflow_name WorkersScript#workflow_name}

---

### WorkersScriptBindingsOutbound <a name="WorkersScriptBindingsOutbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptBindingsOutbound(
  params: typing.List[str] = None,
  worker: WorkersScriptBindingsOutboundWorker = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.params">params</a></code> | <code>typing.List[str]</code> | Pass information from the Dispatch Worker to the Outbound Worker through the parameters. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a></code> | Outbound worker. |

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.params"></a>

```python
params: typing.List[str]
```

- *Type:* typing.List[str]

Pass information from the Dispatch Worker to the Outbound Worker through the parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#params WorkersScript#params}

---

##### `worker`<sup>Optional</sup> <a name="worker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.worker"></a>

```python
worker: WorkersScriptBindingsOutboundWorker
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#worker WorkersScript#worker}

---

### WorkersScriptBindingsOutboundWorker <a name="WorkersScriptBindingsOutboundWorker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptBindingsOutboundWorker(
  environment: str = None,
  service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.environment">environment</a></code> | <code>str</code> | Environment of the outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.service">service</a></code> | <code>str</code> | Name of the outbound worker. |

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.environment"></a>

```python
environment: str
```

- *Type:* str

Environment of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#environment WorkersScript#environment}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.service"></a>

```python
service: str
```

- *Type:* str

Name of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#service WorkersScript#service}

---

### WorkersScriptConfig <a name="WorkersScriptConfig" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  script_name: str,
  assets: WorkersScriptAssets = None,
  bindings: IResolvable | typing.List[WorkersScriptBindings] = None,
  body_part: str = None,
  compatibility_date: str = None,
  compatibility_flags: typing.List[str] = None,
  content: str = None,
  content_file: str = None,
  content_sha256: str = None,
  content_type: str = None,
  keep_assets: bool | IResolvable = None,
  keep_bindings: typing.List[str] = None,
  limits: WorkersScriptLimits = None,
  logpush: bool | IResolvable = None,
  main_module: str = None,
  migrations: WorkersScriptMigrations = None,
  observability: WorkersScriptObservability = None,
  placement: WorkersScriptPlacement = None,
  tail_consumers: IResolvable | typing.List[WorkersScriptTailConsumers] = None,
  usage_model: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.scriptName">script_name</a></code> | <code>str</code> | Name of the script, used in URLs and route configuration. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bindings">bindings</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>]</code> | List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bodyPart">body_part</a></code> | <code>str</code> | Name of the uploaded file that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityDate">compatibility_date</a></code> | <code>str</code> | Date indicating targeted support in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | Flags that enable or disable certain features in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.content">content</a></code> | <code>str</code> | Module or Service Worker contents of the Worker. Conflicts with `content_file`. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentFile">content_file</a></code> | <code>str</code> | Path to a file containing the Module or Service Worker contents of the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentSha256">content_sha256</a></code> | <code>str</code> | SHA-256 hash of the Worker contents. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentType">content_type</a></code> | <code>str</code> | Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python"). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepAssets">keep_assets</a></code> | <code>bool \| cdktf.IResolvable</code> | Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepBindings">keep_bindings</a></code> | <code>typing.List[str]</code> | List of binding types to keep from previous_upload. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a></code> | Limits to apply for this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.logpush">logpush</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether Logpush is turned on for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.mainModule">main_module</a></code> | <code>str</code> | Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.migrations">migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a></code> | Migrations to apply for Durable Objects associated with this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.observability">observability</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a></code> | Observability settings for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a></code> | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.tailConsumers">tail_consumers</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>]</code> | List of Workers that will consume logs from the attached Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.usageModel">usage_model</a></code> | <code>str</code> | Usage model for the Worker invocations. Available values: "standard", "bundled", "unbound". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

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
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#account_id WorkersScript#account_id}

---

##### `script_name`<sup>Required</sup> <a name="script_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.scriptName"></a>

```python
script_name: str
```

- *Type:* str

Name of the script, used in URLs and route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#script_name WorkersScript#script_name}

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.assets"></a>

```python
assets: WorkersScriptAssets
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#assets WorkersScript#assets}

---

##### `bindings`<sup>Optional</sup> <a name="bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bindings"></a>

```python
bindings: IResolvable | typing.List[WorkersScriptBindings]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>]

List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#bindings WorkersScript#bindings}

---

##### `body_part`<sup>Optional</sup> <a name="body_part" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bodyPart"></a>

```python
body_part: str
```

- *Type:* str

Name of the uploaded file that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#body_part WorkersScript#body_part}

---

##### `compatibility_date`<sup>Optional</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityDate"></a>

```python
compatibility_date: str
```

- *Type:* str

Date indicating targeted support in the Workers runtime.

Backwards incompatible fixes to the runtime following this date will not affect this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#compatibility_date WorkersScript#compatibility_date}

---

##### `compatibility_flags`<sup>Optional</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityFlags"></a>

```python
compatibility_flags: typing.List[str]
```

- *Type:* typing.List[str]

Flags that enable or disable certain features in the Workers runtime.

Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#compatibility_flags WorkersScript#compatibility_flags}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Module or Service Worker contents of the Worker. Conflicts with `content_file`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#content WorkersScript#content}

---

##### `content_file`<sup>Optional</sup> <a name="content_file" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentFile"></a>

```python
content_file: str
```

- *Type:* str

Path to a file containing the Module or Service Worker contents of the Worker.

Conflicts with `content`. Must be paired with `content_sha256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#content_file WorkersScript#content_file}

---

##### `content_sha256`<sup>Optional</sup> <a name="content_sha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentSha256"></a>

```python
content_sha256: str
```

- *Type:* str

SHA-256 hash of the Worker contents.

Used to trigger updates when source code changes. Must be provided when `content_file` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#content_sha256 WorkersScript#content_sha256}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#content_type WorkersScript#content_type}

---

##### `keep_assets`<sup>Optional</sup> <a name="keep_assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepAssets"></a>

```python
keep_assets: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#keep_assets WorkersScript#keep_assets}

---

##### `keep_bindings`<sup>Optional</sup> <a name="keep_bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepBindings"></a>

```python
keep_bindings: typing.List[str]
```

- *Type:* typing.List[str]

List of binding types to keep from previous_upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#keep_bindings WorkersScript#keep_bindings}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.limits"></a>

```python
limits: WorkersScriptLimits
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a>

Limits to apply for this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#limits WorkersScript#limits}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.logpush"></a>

```python
logpush: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether Logpush is turned on for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#logpush WorkersScript#logpush}

---

##### `main_module`<sup>Optional</sup> <a name="main_module" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.mainModule"></a>

```python
main_module: str
```

- *Type:* str

Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#main_module WorkersScript#main_module}

---

##### `migrations`<sup>Optional</sup> <a name="migrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.migrations"></a>

```python
migrations: WorkersScriptMigrations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

Migrations to apply for Durable Objects associated with this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#migrations WorkersScript#migrations}

---

##### `observability`<sup>Optional</sup> <a name="observability" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.observability"></a>

```python
observability: WorkersScriptObservability
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

Observability settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#observability WorkersScript#observability}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.placement"></a>

```python
placement: WorkersScriptPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#placement WorkersScript#placement}

---

##### `tail_consumers`<sup>Optional</sup> <a name="tail_consumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.tailConsumers"></a>

```python
tail_consumers: IResolvable | typing.List[WorkersScriptTailConsumers]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>]

List of Workers that will consume logs from the attached Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#tail_consumers WorkersScript#tail_consumers}

---

##### `usage_model`<sup>Optional</sup> <a name="usage_model" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.usageModel"></a>

```python
usage_model: str
```

- *Type:* str

Usage model for the Worker invocations. Available values: "standard", "bundled", "unbound".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#usage_model WorkersScript#usage_model}

---

### WorkersScriptLimits <a name="WorkersScriptLimits" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptLimits(
  cpu_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits.property.cpuMs">cpu_ms</a></code> | <code>typing.Union[int, float]</code> | The amount of CPU time this Worker can use in milliseconds. |

---

##### `cpu_ms`<sup>Optional</sup> <a name="cpu_ms" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits.property.cpuMs"></a>

```python
cpu_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of CPU time this Worker can use in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#cpu_ms WorkersScript#cpu_ms}

---

### WorkersScriptMigrations <a name="WorkersScriptMigrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrations(
  deleted_classes: typing.List[str] = None,
  new_classes: typing.List[str] = None,
  new_sqlite_classes: typing.List[str] = None,
  new_tag: str = None,
  old_tag: str = None,
  renamed_classes: IResolvable | typing.List[WorkersScriptMigrationsRenamedClasses] = None,
  steps: IResolvable | typing.List[WorkersScriptMigrationsSteps] = None,
  transferred_classes: IResolvable | typing.List[WorkersScriptMigrationsTransferredClasses] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.deletedClasses">deleted_classes</a></code> | <code>typing.List[str]</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newClasses">new_classes</a></code> | <code>typing.List[str]</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newSqliteClasses">new_sqlite_classes</a></code> | <code>typing.List[str]</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newTag">new_tag</a></code> | <code>str</code> | Tag to set as the latest migration tag. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.oldTag">old_tag</a></code> | <code>str</code> | Tag used to verify against the latest migration tag for this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.renamedClasses">renamed_classes</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>]</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.steps">steps</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>]</code> | Migrations to apply in order. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.transferredClasses">transferred_classes</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>]</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `deleted_classes`<sup>Optional</sup> <a name="deleted_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.deletedClasses"></a>

```python
deleted_classes: typing.List[str]
```

- *Type:* typing.List[str]

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#deleted_classes WorkersScript#deleted_classes}

---

##### `new_classes`<sup>Optional</sup> <a name="new_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newClasses"></a>

```python
new_classes: typing.List[str]
```

- *Type:* typing.List[str]

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#new_classes WorkersScript#new_classes}

---

##### `new_sqlite_classes`<sup>Optional</sup> <a name="new_sqlite_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newSqliteClasses"></a>

```python
new_sqlite_classes: typing.List[str]
```

- *Type:* typing.List[str]

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#new_sqlite_classes WorkersScript#new_sqlite_classes}

---

##### `new_tag`<sup>Optional</sup> <a name="new_tag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newTag"></a>

```python
new_tag: str
```

- *Type:* str

Tag to set as the latest migration tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#new_tag WorkersScript#new_tag}

---

##### `old_tag`<sup>Optional</sup> <a name="old_tag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.oldTag"></a>

```python
old_tag: str
```

- *Type:* str

Tag used to verify against the latest migration tag for this Worker.

If they don't match, the upload is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#old_tag WorkersScript#old_tag}

---

##### `renamed_classes`<sup>Optional</sup> <a name="renamed_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.renamedClasses"></a>

```python
renamed_classes: IResolvable | typing.List[WorkersScriptMigrationsRenamedClasses]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>]

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#renamed_classes WorkersScript#renamed_classes}

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.steps"></a>

```python
steps: IResolvable | typing.List[WorkersScriptMigrationsSteps]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>]

Migrations to apply in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#steps WorkersScript#steps}

---

##### `transferred_classes`<sup>Optional</sup> <a name="transferred_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.transferredClasses"></a>

```python
transferred_classes: IResolvable | typing.List[WorkersScriptMigrationsTransferredClasses]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>]

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#transferred_classes WorkersScript#transferred_classes}

---

### WorkersScriptMigrationsRenamedClasses <a name="WorkersScriptMigrationsRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsRenamedClasses(
  from: str = None,
  to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.to">to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.to"></a>

```python
to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptMigrationsSteps <a name="WorkersScriptMigrationsSteps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsSteps(
  deleted_classes: typing.List[str] = None,
  new_classes: typing.List[str] = None,
  new_sqlite_classes: typing.List[str] = None,
  renamed_classes: IResolvable | typing.List[WorkersScriptMigrationsStepsRenamedClasses] = None,
  transferred_classes: IResolvable | typing.List[WorkersScriptMigrationsStepsTransferredClasses] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.deletedClasses">deleted_classes</a></code> | <code>typing.List[str]</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newClasses">new_classes</a></code> | <code>typing.List[str]</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newSqliteClasses">new_sqlite_classes</a></code> | <code>typing.List[str]</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.renamedClasses">renamed_classes</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>]</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.transferredClasses">transferred_classes</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>]</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `deleted_classes`<sup>Optional</sup> <a name="deleted_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.deletedClasses"></a>

```python
deleted_classes: typing.List[str]
```

- *Type:* typing.List[str]

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#deleted_classes WorkersScript#deleted_classes}

---

##### `new_classes`<sup>Optional</sup> <a name="new_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newClasses"></a>

```python
new_classes: typing.List[str]
```

- *Type:* typing.List[str]

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#new_classes WorkersScript#new_classes}

---

##### `new_sqlite_classes`<sup>Optional</sup> <a name="new_sqlite_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newSqliteClasses"></a>

```python
new_sqlite_classes: typing.List[str]
```

- *Type:* typing.List[str]

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#new_sqlite_classes WorkersScript#new_sqlite_classes}

---

##### `renamed_classes`<sup>Optional</sup> <a name="renamed_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.renamedClasses"></a>

```python
renamed_classes: IResolvable | typing.List[WorkersScriptMigrationsStepsRenamedClasses]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>]

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#renamed_classes WorkersScript#renamed_classes}

---

##### `transferred_classes`<sup>Optional</sup> <a name="transferred_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.transferredClasses"></a>

```python
transferred_classes: IResolvable | typing.List[WorkersScriptMigrationsStepsTransferredClasses]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>]

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#transferred_classes WorkersScript#transferred_classes}

---

### WorkersScriptMigrationsStepsRenamedClasses <a name="WorkersScriptMigrationsStepsRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsStepsRenamedClasses(
  from: str = None,
  to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.to">to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.to"></a>

```python
to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptMigrationsStepsTransferredClasses <a name="WorkersScriptMigrationsStepsTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsStepsTransferredClasses(
  from: str = None,
  from_script: str = None,
  to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.fromScript">from_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from_script WorkersScript#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.to">to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}.

---

##### `from_script`<sup>Optional</sup> <a name="from_script" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.fromScript"></a>

```python
from_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from_script WorkersScript#from_script}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.to"></a>

```python
to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptMigrationsTransferredClasses <a name="WorkersScriptMigrationsTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsTransferredClasses(
  from: str = None,
  from_script: str = None,
  to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.fromScript">from_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from_script WorkersScript#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.to">to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}.

---

##### `from_script`<sup>Optional</sup> <a name="from_script" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.fromScript"></a>

```python
from_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from_script WorkersScript#from_script}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.to"></a>

```python
to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptNamedHandlers <a name="WorkersScriptNamedHandlers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlers.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptNamedHandlers()
```


### WorkersScriptObservability <a name="WorkersScriptObservability" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptObservability(
  enabled: bool | IResolvable,
  head_sampling_rate: typing.Union[int, float] = None,
  logs: WorkersScriptObservabilityLogs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether observability is enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a></code> | Log settings for the Worker. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether observability is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#enabled WorkersScript#enabled}

---

##### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.logs"></a>

```python
logs: WorkersScriptObservabilityLogs
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

Log settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#logs WorkersScript#logs}

---

### WorkersScriptObservabilityLogs <a name="WorkersScriptObservabilityLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptObservabilityLogs(
  enabled: bool | IResolvable,
  invocation_logs: bool | IResolvable,
  destinations: typing.List[str] = None,
  head_sampling_rate: typing.Union[int, float] = None,
  persist: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether logs are enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.invocationLogs">invocation_logs</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | A list of destinations where logs will be exported to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.persist">persist</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether log persistence is enabled for the Worker. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether logs are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#enabled WorkersScript#enabled}

---

##### `invocation_logs`<sup>Required</sup> <a name="invocation_logs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.invocationLogs"></a>

```python
invocation_logs: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#invocation_logs WorkersScript#invocation_logs}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

A list of destinations where logs will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#destinations WorkersScript#destinations}

---

##### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}

---

##### `persist`<sup>Optional</sup> <a name="persist" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.persist"></a>

```python
persist: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether log persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#persist WorkersScript#persist}

---

### WorkersScriptPlacement <a name="WorkersScriptPlacement" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptPlacement(
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement.property.mode">mode</a></code> | <code>str</code> | Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart". |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement.property.mode"></a>

```python
mode: str
```

- *Type:* str

Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#mode WorkersScript#mode}

---

### WorkersScriptTailConsumers <a name="WorkersScriptTailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptTailConsumers(
  service: str,
  environment: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.service">service</a></code> | <code>str</code> | Name of Worker that is to be the consumer. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.environment">environment</a></code> | <code>str</code> | Optional environment if the Worker utilizes one. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.namespace">namespace</a></code> | <code>str</code> | Optional dispatch namespace the script belongs to. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.service"></a>

```python
service: str
```

- *Type:* str

Name of Worker that is to be the consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#service WorkersScript#service}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.environment"></a>

```python
environment: str
```

- *Type:* str

Optional environment if the Worker utilizes one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#environment WorkersScript#environment}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Optional dispatch namespace the script belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#namespace WorkersScript#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkersScriptAssetsConfigOutputReference <a name="WorkersScriptAssetsConfigOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptAssetsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHtmlHandling">reset_html_handling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetNotFoundHandling">reset_not_found_handling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRedirects">reset_redirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRunWorkerFirst">reset_run_worker_first</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetServeDirectly">reset_serve_directly</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_html_handling` <a name="reset_html_handling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHtmlHandling"></a>

```python
def reset_html_handling() -> None
```

##### `reset_not_found_handling` <a name="reset_not_found_handling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetNotFoundHandling"></a>

```python
def reset_not_found_handling() -> None
```

##### `reset_redirects` <a name="reset_redirects" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRedirects"></a>

```python
def reset_redirects() -> None
```

##### `reset_run_worker_first` <a name="reset_run_worker_first" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRunWorkerFirst"></a>

```python
def reset_run_worker_first() -> None
```

##### `reset_serve_directly` <a name="reset_serve_directly" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetServeDirectly"></a>

```python
def reset_serve_directly() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headersInput">headers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandlingInput">html_handling_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandlingInput">not_found_handling_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirectsInput">redirects_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirstInput">run_worker_first_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectlyInput">serve_directly_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headers">headers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandling">html_handling</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandling">not_found_handling</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirects">redirects</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirst">run_worker_first</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectly">serve_directly</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headersInput"></a>

```python
headers_input: str
```

- *Type:* str

---

##### `html_handling_input`<sup>Optional</sup> <a name="html_handling_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandlingInput"></a>

```python
html_handling_input: str
```

- *Type:* str

---

##### `not_found_handling_input`<sup>Optional</sup> <a name="not_found_handling_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandlingInput"></a>

```python
not_found_handling_input: str
```

- *Type:* str

---

##### `redirects_input`<sup>Optional</sup> <a name="redirects_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirectsInput"></a>

```python
redirects_input: str
```

- *Type:* str

---

##### `run_worker_first_input`<sup>Optional</sup> <a name="run_worker_first_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirstInput"></a>

```python
run_worker_first_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `serve_directly_input`<sup>Optional</sup> <a name="serve_directly_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectlyInput"></a>

```python
serve_directly_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headers"></a>

```python
headers: str
```

- *Type:* str

---

##### `html_handling`<sup>Required</sup> <a name="html_handling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandling"></a>

```python
html_handling: str
```

- *Type:* str

---

##### `not_found_handling`<sup>Required</sup> <a name="not_found_handling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandling"></a>

```python
not_found_handling: str
```

- *Type:* str

---

##### `redirects`<sup>Required</sup> <a name="redirects" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirects"></a>

```python
redirects: str
```

- *Type:* str

---

##### `run_worker_first`<sup>Required</sup> <a name="run_worker_first" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirst"></a>

```python
run_worker_first: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `serve_directly`<sup>Required</sup> <a name="serve_directly" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectly"></a>

```python
serve_directly: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkersScriptAssetsConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

---


### WorkersScriptAssetsOutputReference <a name="WorkersScriptAssetsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptAssetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetDirectory">reset_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetJwt">reset_jwt</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config` <a name="put_config" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig"></a>

```python
def put_config(
  headers: str = None,
  html_handling: str = None,
  not_found_handling: str = None,
  redirects: str = None,
  run_worker_first: typing.Mapping[typing.Any] = None,
  serve_directly: bool | IResolvable = None
) -> None
```

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig.parameter.headers"></a>

- *Type:* str

The contents of a _headers file (used to attach custom headers on asset responses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#headers WorkersScript#headers}

---

###### `html_handling`<sup>Optional</sup> <a name="html_handling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig.parameter.htmlHandling"></a>

- *Type:* str

Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#html_handling WorkersScript#html_handling}

---

###### `not_found_handling`<sup>Optional</sup> <a name="not_found_handling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig.parameter.notFoundHandling"></a>

- *Type:* str

Determines the response when a request does not match a static asset, and there is no Worker script.

Available values: "none", "404-page", "single-page-application".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#not_found_handling WorkersScript#not_found_handling}

---

###### `redirects`<sup>Optional</sup> <a name="redirects" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig.parameter.redirects"></a>

- *Type:* str

The contents of a _redirects file (used to apply redirects or proxy paths ahead of asset serving).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#redirects WorkersScript#redirects}

---

###### `run_worker_first`<sup>Optional</sup> <a name="run_worker_first" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig.parameter.runWorkerFirst"></a>

- *Type:* typing.Mapping[typing.Any]

When a boolean true, requests will always invoke the Worker script.

Otherwise, attempt to serve an asset matching the request, falling back to the Worker script. When a list of strings, contains path rules to control routing to either the Worker or assets. Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#run_worker_first WorkersScript#run_worker_first}

---

###### `serve_directly`<sup>Optional</sup> <a name="serve_directly" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig.parameter.serveDirectly"></a>

- *Type:* bool | cdktf.IResolvable

When true and the incoming request matches an asset, that will be served instead of invoking the Worker script.

When false, requests will always invoke the Worker script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#serve_directly WorkersScript#serve_directly}

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_directory` <a name="reset_directory" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetDirectory"></a>

```python
def reset_directory() -> None
```

##### `reset_jwt` <a name="reset_jwt" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetJwt"></a>

```python
def reset_jwt() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.assetManifestSha256">asset_manifest_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference">WorkersScriptAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.configInput">config_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directoryInput">directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwtInput">jwt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directory">directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwt">jwt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asset_manifest_sha256`<sup>Required</sup> <a name="asset_manifest_sha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.assetManifestSha256"></a>

```python
asset_manifest_sha256: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.config"></a>

```python
config: WorkersScriptAssetsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference">WorkersScriptAssetsConfigOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.configInput"></a>

```python
config_input: IResolvable | WorkersScriptAssetsConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

---

##### `directory_input`<sup>Optional</sup> <a name="directory_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directoryInput"></a>

```python
directory_input: str
```

- *Type:* str

---

##### `jwt_input`<sup>Optional</sup> <a name="jwt_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwtInput"></a>

```python
jwt_input: str
```

- *Type:* str

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directory"></a>

```python
directory: str
```

- *Type:* str

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwt"></a>

```python
jwt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkersScriptAssets
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

---


### WorkersScriptBindingsList <a name="WorkersScriptBindingsList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptBindingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkersScriptBindings]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>]

---


### WorkersScriptBindingsOutboundOutputReference <a name="WorkersScriptBindingsOutboundOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptBindingsOutboundOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker">put_worker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetParams">reset_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetWorker">reset_worker</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_worker` <a name="put_worker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker"></a>

```python
def put_worker(
  environment: str = None,
  service: str = None
) -> None
```

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker.parameter.environment"></a>

- *Type:* str

Environment of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#environment WorkersScript#environment}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker.parameter.service"></a>

- *Type:* str

Name of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#service WorkersScript#service}

---

##### `reset_params` <a name="reset_params" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetParams"></a>

```python
def reset_params() -> None
```

##### `reset_worker` <a name="reset_worker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetWorker"></a>

```python
def reset_worker() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference">WorkersScriptBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.paramsInput">params_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.workerInput">worker_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.params">params</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `worker`<sup>Required</sup> <a name="worker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.worker"></a>

```python
worker: WorkersScriptBindingsOutboundWorkerOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference">WorkersScriptBindingsOutboundWorkerOutputReference</a>

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.paramsInput"></a>

```python
params_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `worker_input`<sup>Optional</sup> <a name="worker_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.workerInput"></a>

```python
worker_input: IResolvable | WorkersScriptBindingsOutboundWorker
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.params"></a>

```python
params: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkersScriptBindingsOutbound
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a>

---


### WorkersScriptBindingsOutboundWorkerOutputReference <a name="WorkersScriptBindingsOutboundWorkerOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptBindingsOutboundWorkerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkersScriptBindingsOutboundWorker
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

---


### WorkersScriptBindingsOutputReference <a name="WorkersScriptBindingsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptBindingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound">put_outbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedDestinationAddresses">reset_allowed_destination_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedSenderAddresses">reset_allowed_sender_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetCertificateId">reset_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetClassName">reset_class_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDataset">reset_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDestinationAddress">reset_destination_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetIndexName">reset_index_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJson">reset_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJurisdiction">reset_jurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyBase64">reset_key_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyJwk">reset_key_jwk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespaceId">reset_namespace_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOldName">reset_old_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOutbound">reset_outbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPart">reset_part</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPipeline">reset_pipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetQueueName">reset_queue_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetScriptName">reset_script_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetSecretName">reset_secret_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetStoreId">reset_store_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetUsages">reset_usages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetVersionId">reset_version_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetWorkflowName">reset_workflow_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_outbound` <a name="put_outbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound"></a>

```python
def put_outbound(
  params: typing.List[str] = None,
  worker: WorkersScriptBindingsOutboundWorker = None
) -> None
```

###### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound.parameter.params"></a>

- *Type:* typing.List[str]

Pass information from the Dispatch Worker to the Outbound Worker through the parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#params WorkersScript#params}

---

###### `worker`<sup>Optional</sup> <a name="worker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound.parameter.worker"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#worker WorkersScript#worker}

---

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_allowed_destination_addresses` <a name="reset_allowed_destination_addresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedDestinationAddresses"></a>

```python
def reset_allowed_destination_addresses() -> None
```

##### `reset_allowed_sender_addresses` <a name="reset_allowed_sender_addresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedSenderAddresses"></a>

```python
def reset_allowed_sender_addresses() -> None
```

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_certificate_id` <a name="reset_certificate_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetCertificateId"></a>

```python
def reset_certificate_id() -> None
```

##### `reset_class_name` <a name="reset_class_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetClassName"></a>

```python
def reset_class_name() -> None
```

##### `reset_dataset` <a name="reset_dataset" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDataset"></a>

```python
def reset_dataset() -> None
```

##### `reset_destination_address` <a name="reset_destination_address" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDestinationAddress"></a>

```python
def reset_destination_address() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_index_name` <a name="reset_index_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetIndexName"></a>

```python
def reset_index_name() -> None
```

##### `reset_json` <a name="reset_json" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJson"></a>

```python
def reset_json() -> None
```

##### `reset_jurisdiction` <a name="reset_jurisdiction" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJurisdiction"></a>

```python
def reset_jurisdiction() -> None
```

##### `reset_key_base64` <a name="reset_key_base64" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyBase64"></a>

```python
def reset_key_base64() -> None
```

##### `reset_key_jwk` <a name="reset_key_jwk" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyJwk"></a>

```python
def reset_key_jwk() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_namespace_id` <a name="reset_namespace_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespaceId"></a>

```python
def reset_namespace_id() -> None
```

##### `reset_old_name` <a name="reset_old_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOldName"></a>

```python
def reset_old_name() -> None
```

##### `reset_outbound` <a name="reset_outbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOutbound"></a>

```python
def reset_outbound() -> None
```

##### `reset_part` <a name="reset_part" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPart"></a>

```python
def reset_part() -> None
```

##### `reset_pipeline` <a name="reset_pipeline" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPipeline"></a>

```python
def reset_pipeline() -> None
```

##### `reset_queue_name` <a name="reset_queue_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetQueueName"></a>

```python
def reset_queue_name() -> None
```

##### `reset_script_name` <a name="reset_script_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetScriptName"></a>

```python
def reset_script_name() -> None
```

##### `reset_secret_name` <a name="reset_secret_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetSecretName"></a>

```python
def reset_secret_name() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_store_id` <a name="reset_store_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetStoreId"></a>

```python
def reset_store_id() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_usages` <a name="reset_usages" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetUsages"></a>

```python
def reset_usages() -> None
```

##### `reset_version_id` <a name="reset_version_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetVersionId"></a>

```python
def reset_version_id() -> None
```

##### `reset_workflow_name` <a name="reset_workflow_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetWorkflowName"></a>

```python
def reset_workflow_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outbound">outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference">WorkersScriptBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddressesInput">allowed_destination_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddressesInput">allowed_sender_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateIdInput">certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.classNameInput">class_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddressInput">destination_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexNameInput">index_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jsonInput">json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdictionInput">jurisdiction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64Input">key_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwkInput">key_jwk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldNameInput">old_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outboundInput">outbound_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.partInput">part_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipelineInput">pipeline_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueNameInput">queue_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptNameInput">script_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeIdInput">store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usagesInput">usages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowNameInput">workflow_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddresses">allowed_destination_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddresses">allowed_sender_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.className">class_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddress">destination_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.json">json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdiction">jurisdiction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64">key_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwk">key_jwk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldName">old_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.part">part</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipeline">pipeline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueName">queue_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptName">script_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeId">store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usages">usages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowName">workflow_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `outbound`<sup>Required</sup> <a name="outbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outbound"></a>

```python
outbound: WorkersScriptBindingsOutboundOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference">WorkersScriptBindingsOutboundOutputReference</a>

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `allowed_destination_addresses_input`<sup>Optional</sup> <a name="allowed_destination_addresses_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddressesInput"></a>

```python
allowed_destination_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_sender_addresses_input`<sup>Optional</sup> <a name="allowed_sender_addresses_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddressesInput"></a>

```python
allowed_sender_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `certificate_id_input`<sup>Optional</sup> <a name="certificate_id_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateIdInput"></a>

```python
certificate_id_input: str
```

- *Type:* str

---

##### `class_name_input`<sup>Optional</sup> <a name="class_name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.classNameInput"></a>

```python
class_name_input: str
```

- *Type:* str

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `destination_address_input`<sup>Optional</sup> <a name="destination_address_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddressInput"></a>

```python
destination_address_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_name_input`<sup>Optional</sup> <a name="index_name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexNameInput"></a>

```python
index_name_input: str
```

- *Type:* str

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jsonInput"></a>

```python
json_input: str
```

- *Type:* str

---

##### `jurisdiction_input`<sup>Optional</sup> <a name="jurisdiction_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdictionInput"></a>

```python
jurisdiction_input: str
```

- *Type:* str

---

##### `key_base64_input`<sup>Optional</sup> <a name="key_base64_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64Input"></a>

```python
key_base64_input: str
```

- *Type:* str

---

##### `key_jwk_input`<sup>Optional</sup> <a name="key_jwk_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwkInput"></a>

```python
key_jwk_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `old_name_input`<sup>Optional</sup> <a name="old_name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldNameInput"></a>

```python
old_name_input: str
```

- *Type:* str

---

##### `outbound_input`<sup>Optional</sup> <a name="outbound_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outboundInput"></a>

```python
outbound_input: IResolvable | WorkersScriptBindingsOutbound
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a>

---

##### `part_input`<sup>Optional</sup> <a name="part_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.partInput"></a>

```python
part_input: str
```

- *Type:* str

---

##### `pipeline_input`<sup>Optional</sup> <a name="pipeline_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipelineInput"></a>

```python
pipeline_input: str
```

- *Type:* str

---

##### `queue_name_input`<sup>Optional</sup> <a name="queue_name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueNameInput"></a>

```python
queue_name_input: str
```

- *Type:* str

---

##### `script_name_input`<sup>Optional</sup> <a name="script_name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptNameInput"></a>

```python
script_name_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `store_id_input`<sup>Optional</sup> <a name="store_id_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeIdInput"></a>

```python
store_id_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `usages_input`<sup>Optional</sup> <a name="usages_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usagesInput"></a>

```python
usages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `workflow_name_input`<sup>Optional</sup> <a name="workflow_name_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowNameInput"></a>

```python
workflow_name_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `allowed_destination_addresses`<sup>Required</sup> <a name="allowed_destination_addresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddresses"></a>

```python
allowed_destination_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_sender_addresses`<sup>Required</sup> <a name="allowed_sender_addresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddresses"></a>

```python
allowed_sender_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `class_name`<sup>Required</sup> <a name="class_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.className"></a>

```python
class_name: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `destination_address`<sup>Required</sup> <a name="destination_address" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddress"></a>

```python
destination_address: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.json"></a>

```python
json: str
```

- *Type:* str

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdiction"></a>

```python
jurisdiction: str
```

- *Type:* str

---

##### `key_base64`<sup>Required</sup> <a name="key_base64" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64"></a>

```python
key_base64: str
```

- *Type:* str

---

##### `key_jwk`<sup>Required</sup> <a name="key_jwk" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwk"></a>

```python
key_jwk: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `old_name`<sup>Required</sup> <a name="old_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldName"></a>

```python
old_name: str
```

- *Type:* str

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.part"></a>

```python
part: str
```

- *Type:* str

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipeline"></a>

```python
pipeline: str
```

- *Type:* str

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

---

##### `script_name`<sup>Required</sup> <a name="script_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptName"></a>

```python
script_name: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `store_id`<sup>Required</sup> <a name="store_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeId"></a>

```python
store_id: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usages"></a>

```python
usages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `workflow_name`<sup>Required</sup> <a name="workflow_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowName"></a>

```python
workflow_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkersScriptBindings
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>

---


### WorkersScriptLimitsOutputReference <a name="WorkersScriptLimitsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resetCpuMs">reset_cpu_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_ms` <a name="reset_cpu_ms" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resetCpuMs"></a>

```python
def reset_cpu_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMsInput">cpu_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMs">cpu_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_ms_input`<sup>Optional</sup> <a name="cpu_ms_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMsInput"></a>

```python
cpu_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_ms`<sup>Required</sup> <a name="cpu_ms" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMs"></a>

```python
cpu_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkersScriptLimits
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a>

---


### WorkersScriptMigrationsOutputReference <a name="WorkersScriptMigrationsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putRenamedClasses">put_renamed_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putSteps">put_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putTransferredClasses">put_transferred_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetDeletedClasses">reset_deleted_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewClasses">reset_new_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewSqliteClasses">reset_new_sqlite_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewTag">reset_new_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetOldTag">reset_old_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetRenamedClasses">reset_renamed_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetSteps">reset_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetTransferredClasses">reset_transferred_classes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_renamed_classes` <a name="put_renamed_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putRenamedClasses"></a>

```python
def put_renamed_classes(
  value: IResolvable | typing.List[WorkersScriptMigrationsRenamedClasses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>]

---

##### `put_steps` <a name="put_steps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putSteps"></a>

```python
def put_steps(
  value: IResolvable | typing.List[WorkersScriptMigrationsSteps]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putSteps.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>]

---

##### `put_transferred_classes` <a name="put_transferred_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putTransferredClasses"></a>

```python
def put_transferred_classes(
  value: IResolvable | typing.List[WorkersScriptMigrationsTransferredClasses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>]

---

##### `reset_deleted_classes` <a name="reset_deleted_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetDeletedClasses"></a>

```python
def reset_deleted_classes() -> None
```

##### `reset_new_classes` <a name="reset_new_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewClasses"></a>

```python
def reset_new_classes() -> None
```

##### `reset_new_sqlite_classes` <a name="reset_new_sqlite_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewSqliteClasses"></a>

```python
def reset_new_sqlite_classes() -> None
```

##### `reset_new_tag` <a name="reset_new_tag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewTag"></a>

```python
def reset_new_tag() -> None
```

##### `reset_old_tag` <a name="reset_old_tag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetOldTag"></a>

```python
def reset_old_tag() -> None
```

##### `reset_renamed_classes` <a name="reset_renamed_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetRenamedClasses"></a>

```python
def reset_renamed_classes() -> None
```

##### `reset_steps` <a name="reset_steps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetSteps"></a>

```python
def reset_steps() -> None
```

##### `reset_transferred_classes` <a name="reset_transferred_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetTransferredClasses"></a>

```python
def reset_transferred_classes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClasses">renamed_classes</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList">WorkersScriptMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList">WorkersScriptMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClasses">transferred_classes</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList">WorkersScriptMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClassesInput">deleted_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClassesInput">new_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClassesInput">new_sqlite_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTagInput">new_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTagInput">old_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClassesInput">renamed_classes_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.stepsInput">steps_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClassesInput">transferred_classes_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClasses">deleted_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClasses">new_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClasses">new_sqlite_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTag">new_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTag">old_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `renamed_classes`<sup>Required</sup> <a name="renamed_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClasses"></a>

```python
renamed_classes: WorkersScriptMigrationsRenamedClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList">WorkersScriptMigrationsRenamedClassesList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.steps"></a>

```python
steps: WorkersScriptMigrationsStepsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList">WorkersScriptMigrationsStepsList</a>

---

##### `transferred_classes`<sup>Required</sup> <a name="transferred_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClasses"></a>

```python
transferred_classes: WorkersScriptMigrationsTransferredClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList">WorkersScriptMigrationsTransferredClassesList</a>

---

##### `deleted_classes_input`<sup>Optional</sup> <a name="deleted_classes_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClassesInput"></a>

```python
deleted_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_classes_input`<sup>Optional</sup> <a name="new_classes_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClassesInput"></a>

```python
new_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_sqlite_classes_input`<sup>Optional</sup> <a name="new_sqlite_classes_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClassesInput"></a>

```python
new_sqlite_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_tag_input`<sup>Optional</sup> <a name="new_tag_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTagInput"></a>

```python
new_tag_input: str
```

- *Type:* str

---

##### `old_tag_input`<sup>Optional</sup> <a name="old_tag_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTagInput"></a>

```python
old_tag_input: str
```

- *Type:* str

---

##### `renamed_classes_input`<sup>Optional</sup> <a name="renamed_classes_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClassesInput"></a>

```python
renamed_classes_input: IResolvable | typing.List[WorkersScriptMigrationsRenamedClasses]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>]

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.stepsInput"></a>

```python
steps_input: IResolvable | typing.List[WorkersScriptMigrationsSteps]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>]

---

##### `transferred_classes_input`<sup>Optional</sup> <a name="transferred_classes_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClassesInput"></a>

```python
transferred_classes_input: IResolvable | typing.List[WorkersScriptMigrationsTransferredClasses]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>]

---

##### `deleted_classes`<sup>Required</sup> <a name="deleted_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClasses"></a>

```python
deleted_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_classes`<sup>Required</sup> <a name="new_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClasses"></a>

```python
new_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_sqlite_classes`<sup>Required</sup> <a name="new_sqlite_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClasses"></a>

```python
new_sqlite_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_tag`<sup>Required</sup> <a name="new_tag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTag"></a>

```python
new_tag: str
```

- *Type:* str

---

##### `old_tag`<sup>Required</sup> <a name="old_tag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTag"></a>

```python
old_tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkersScriptMigrations
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

---


### WorkersScriptMigrationsRenamedClassesList <a name="WorkersScriptMigrationsRenamedClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsRenamedClassesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptMigrationsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkersScriptMigrationsRenamedClasses]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>]

---


### WorkersScriptMigrationsRenamedClassesOutputReference <a name="WorkersScriptMigrationsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsRenamedClassesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.toInput">to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.to">to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.toInput"></a>

```python
to_input: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.to"></a>

```python
to: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkersScriptMigrationsRenamedClasses
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>

---


### WorkersScriptMigrationsStepsList <a name="WorkersScriptMigrationsStepsList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptMigrationsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkersScriptMigrationsSteps]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>]

---


### WorkersScriptMigrationsStepsOutputReference <a name="WorkersScriptMigrationsStepsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putRenamedClasses">put_renamed_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putTransferredClasses">put_transferred_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetDeletedClasses">reset_deleted_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewClasses">reset_new_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewSqliteClasses">reset_new_sqlite_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetRenamedClasses">reset_renamed_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetTransferredClasses">reset_transferred_classes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_renamed_classes` <a name="put_renamed_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putRenamedClasses"></a>

```python
def put_renamed_classes(
  value: IResolvable | typing.List[WorkersScriptMigrationsStepsRenamedClasses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>]

---

##### `put_transferred_classes` <a name="put_transferred_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putTransferredClasses"></a>

```python
def put_transferred_classes(
  value: IResolvable | typing.List[WorkersScriptMigrationsStepsTransferredClasses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>]

---

##### `reset_deleted_classes` <a name="reset_deleted_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetDeletedClasses"></a>

```python
def reset_deleted_classes() -> None
```

##### `reset_new_classes` <a name="reset_new_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewClasses"></a>

```python
def reset_new_classes() -> None
```

##### `reset_new_sqlite_classes` <a name="reset_new_sqlite_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewSqliteClasses"></a>

```python
def reset_new_sqlite_classes() -> None
```

##### `reset_renamed_classes` <a name="reset_renamed_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetRenamedClasses"></a>

```python
def reset_renamed_classes() -> None
```

##### `reset_transferred_classes` <a name="reset_transferred_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetTransferredClasses"></a>

```python
def reset_transferred_classes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClasses">renamed_classes</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList">WorkersScriptMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClasses">transferred_classes</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList">WorkersScriptMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClassesInput">deleted_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClassesInput">new_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClassesInput">new_sqlite_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClassesInput">renamed_classes_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClassesInput">transferred_classes_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClasses">deleted_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClasses">new_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClasses">new_sqlite_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `renamed_classes`<sup>Required</sup> <a name="renamed_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClasses"></a>

```python
renamed_classes: WorkersScriptMigrationsStepsRenamedClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList">WorkersScriptMigrationsStepsRenamedClassesList</a>

---

##### `transferred_classes`<sup>Required</sup> <a name="transferred_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClasses"></a>

```python
transferred_classes: WorkersScriptMigrationsStepsTransferredClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList">WorkersScriptMigrationsStepsTransferredClassesList</a>

---

##### `deleted_classes_input`<sup>Optional</sup> <a name="deleted_classes_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClassesInput"></a>

```python
deleted_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_classes_input`<sup>Optional</sup> <a name="new_classes_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClassesInput"></a>

```python
new_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_sqlite_classes_input`<sup>Optional</sup> <a name="new_sqlite_classes_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClassesInput"></a>

```python
new_sqlite_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `renamed_classes_input`<sup>Optional</sup> <a name="renamed_classes_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClassesInput"></a>

```python
renamed_classes_input: IResolvable | typing.List[WorkersScriptMigrationsStepsRenamedClasses]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>]

---

##### `transferred_classes_input`<sup>Optional</sup> <a name="transferred_classes_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClassesInput"></a>

```python
transferred_classes_input: IResolvable | typing.List[WorkersScriptMigrationsStepsTransferredClasses]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>]

---

##### `deleted_classes`<sup>Required</sup> <a name="deleted_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClasses"></a>

```python
deleted_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_classes`<sup>Required</sup> <a name="new_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClasses"></a>

```python
new_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_sqlite_classes`<sup>Required</sup> <a name="new_sqlite_classes" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```python
new_sqlite_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkersScriptMigrationsSteps
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>

---


### WorkersScriptMigrationsStepsRenamedClassesList <a name="WorkersScriptMigrationsStepsRenamedClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsStepsRenamedClassesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptMigrationsStepsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkersScriptMigrationsStepsRenamedClasses]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>]

---


### WorkersScriptMigrationsStepsRenamedClassesOutputReference <a name="WorkersScriptMigrationsStepsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.toInput">to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.to">to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.toInput"></a>

```python
to_input: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```python
to: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkersScriptMigrationsStepsRenamedClasses
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>

---


### WorkersScriptMigrationsStepsTransferredClassesList <a name="WorkersScriptMigrationsStepsTransferredClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsStepsTransferredClassesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptMigrationsStepsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkersScriptMigrationsStepsTransferredClasses]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>]

---


### WorkersScriptMigrationsStepsTransferredClassesOutputReference <a name="WorkersScriptMigrationsStepsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFromScript">reset_from_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_from_script` <a name="reset_from_script" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFromScript"></a>

```python
def reset_from_script() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput">from_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.toInput">to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScript">from_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.to">to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `from_script_input`<sup>Optional</sup> <a name="from_script_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput"></a>

```python
from_script_input: str
```

- *Type:* str

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.toInput"></a>

```python
to_input: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `from_script`<sup>Required</sup> <a name="from_script" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```python
from_script: str
```

- *Type:* str

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```python
to: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkersScriptMigrationsStepsTransferredClasses
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>

---


### WorkersScriptMigrationsTransferredClassesList <a name="WorkersScriptMigrationsTransferredClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsTransferredClassesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptMigrationsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkersScriptMigrationsTransferredClasses]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>]

---


### WorkersScriptMigrationsTransferredClassesOutputReference <a name="WorkersScriptMigrationsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptMigrationsTransferredClassesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFromScript">reset_from_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_from_script` <a name="reset_from_script" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFromScript"></a>

```python
def reset_from_script() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScriptInput">from_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.toInput">to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScript">from_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.to">to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `from_script_input`<sup>Optional</sup> <a name="from_script_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScriptInput"></a>

```python
from_script_input: str
```

- *Type:* str

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.toInput"></a>

```python
to_input: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `from_script`<sup>Required</sup> <a name="from_script" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```python
from_script: str
```

- *Type:* str

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.to"></a>

```python
to: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkersScriptMigrationsTransferredClasses
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>

---


### WorkersScriptNamedHandlersList <a name="WorkersScriptNamedHandlersList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptNamedHandlersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptNamedHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WorkersScriptNamedHandlersOutputReference <a name="WorkersScriptNamedHandlersOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptNamedHandlersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.handlers">handlers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlers">WorkersScriptNamedHandlers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `handlers`<sup>Required</sup> <a name="handlers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.handlers"></a>

```python
handlers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.internalValue"></a>

```python
internal_value: WorkersScriptNamedHandlers
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlers">WorkersScriptNamedHandlers</a>

---


### WorkersScriptObservabilityLogsOutputReference <a name="WorkersScriptObservabilityLogsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptObservabilityLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetHeadSamplingRate">reset_head_sampling_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetPersist">reset_persist</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destinations` <a name="reset_destinations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_head_sampling_rate` <a name="reset_head_sampling_rate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetHeadSamplingRate"></a>

```python
def reset_head_sampling_rate() -> None
```

##### `reset_persist` <a name="reset_persist" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetPersist"></a>

```python
def reset_persist() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinationsInput">destinations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRateInput">head_sampling_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogsInput">invocation_logs_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persistInput">persist_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinations">destinations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogs">invocation_logs</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persist">persist</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinationsInput"></a>

```python
destinations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `head_sampling_rate_input`<sup>Optional</sup> <a name="head_sampling_rate_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRateInput"></a>

```python
head_sampling_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invocation_logs_input`<sup>Optional</sup> <a name="invocation_logs_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogsInput"></a>

```python
invocation_logs_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `persist_input`<sup>Optional</sup> <a name="persist_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persistInput"></a>

```python
persist_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinations"></a>

```python
destinations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `head_sampling_rate`<sup>Required</sup> <a name="head_sampling_rate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invocation_logs`<sup>Required</sup> <a name="invocation_logs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogs"></a>

```python
invocation_logs: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `persist`<sup>Required</sup> <a name="persist" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persist"></a>

```python
persist: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkersScriptObservabilityLogs
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

---


### WorkersScriptObservabilityOutputReference <a name="WorkersScriptObservabilityOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptObservabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs">put_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetHeadSamplingRate">reset_head_sampling_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetLogs">reset_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logs` <a name="put_logs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs"></a>

```python
def put_logs(
  enabled: bool | IResolvable,
  invocation_logs: bool | IResolvable,
  destinations: typing.List[str] = None,
  head_sampling_rate: typing.Union[int, float] = None,
  persist: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether logs are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#enabled WorkersScript#enabled}

---

###### `invocation_logs`<sup>Required</sup> <a name="invocation_logs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs.parameter.invocationLogs"></a>

- *Type:* bool | cdktf.IResolvable

Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#invocation_logs WorkersScript#invocation_logs}

---

###### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs.parameter.destinations"></a>

- *Type:* typing.List[str]

A list of destinations where logs will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#destinations WorkersScript#destinations}

---

###### `head_sampling_rate`<sup>Optional</sup> <a name="head_sampling_rate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs.parameter.headSamplingRate"></a>

- *Type:* typing.Union[int, float]

The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}

---

###### `persist`<sup>Optional</sup> <a name="persist" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs.parameter.persist"></a>

- *Type:* bool | cdktf.IResolvable

Whether log persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#persist WorkersScript#persist}

---

##### `reset_head_sampling_rate` <a name="reset_head_sampling_rate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetHeadSamplingRate"></a>

```python
def reset_head_sampling_rate() -> None
```

##### `reset_logs` <a name="reset_logs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetLogs"></a>

```python
def reset_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference">WorkersScriptObservabilityLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRateInput">head_sampling_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logsInput">logs_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRate">head_sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logs"></a>

```python
logs: WorkersScriptObservabilityLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference">WorkersScriptObservabilityLogsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `head_sampling_rate_input`<sup>Optional</sup> <a name="head_sampling_rate_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRateInput"></a>

```python
head_sampling_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `logs_input`<sup>Optional</sup> <a name="logs_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logsInput"></a>

```python
logs_input: IResolvable | WorkersScriptObservabilityLogs
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `head_sampling_rate`<sup>Required</sup> <a name="head_sampling_rate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRate"></a>

```python
head_sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkersScriptObservability
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

---


### WorkersScriptPlacementOutputReference <a name="WorkersScriptPlacementOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptPlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

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
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resetMode">reset_mode</a></code> | *No description.* |

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

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.lastAnalyzedAt">last_analyzed_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a></code> | *No description.* |

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

##### `last_analyzed_at`<sup>Required</sup> <a name="last_analyzed_at" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.lastAnalyzedAt"></a>

```python
last_analyzed_at: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.status"></a>

```python
status: str
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
internal_value: IResolvable | WorkersScriptPlacement
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

---


### WorkersScriptTailConsumersList <a name="WorkersScriptTailConsumersList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptTailConsumersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersScriptTailConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkersScriptTailConsumers]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>]

---


### WorkersScriptTailConsumersOutputReference <a name="WorkersScriptTailConsumersOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_script

workersScript.WorkersScriptTailConsumersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkersScriptTailConsumers
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>

---



