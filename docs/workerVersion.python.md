# `workerVersion` Submodule <a name="`workerVersion` Submodule" id="@cdktf/provider-cloudflare.workerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkerVersion <a name="WorkerVersion" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version cloudflare_worker_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersion(
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
  worker_id: str,
  annotations: WorkerVersionAnnotations = None,
  assets: WorkerVersionAssets = None,
  bindings: typing.Union[IResolvable, typing.List[WorkerVersionBindings]] = None,
  compatibility_date: str = None,
  compatibility_flags: typing.List[str] = None,
  limits: WorkerVersionLimits = None,
  main_module: str = None,
  migrations: WorkerVersionMigrations = None,
  modules: typing.Union[IResolvable, typing.List[WorkerVersionModules]] = None,
  placement: WorkerVersionPlacement = None,
  usage_model: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.workerId">worker_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.annotations">annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a></code> | Metadata about the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.assets">assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.bindings">bindings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>]]</code> | List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.compatibilityDate">compatibility_date</a></code> | <code>str</code> | Date indicating targeted support in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | Flags that enable or disable certain features in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.limits">limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a></code> | Resource limits enforced at runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.mainModule">main_module</a></code> | <code>str</code> | The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.migrations">migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a></code> | Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.modules">modules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>]]</code> | Code, sourcemaps, and other content used at runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a></code> | Placement settings for the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.usageModel">usage_model</a></code> | <code>str</code> | Usage model for the version. Available values: "standard", "bundled", "unbound". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#account_id WorkerVersion#account_id}

---

##### `worker_id`<sup>Required</sup> <a name="worker_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.workerId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#worker_id WorkerVersion#worker_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.annotations"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

Metadata about the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#annotations WorkerVersion#annotations}

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.assets"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#assets WorkerVersion#assets}

---

##### `bindings`<sup>Optional</sup> <a name="bindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.bindings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>]]

List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#bindings WorkerVersion#bindings}

---

##### `compatibility_date`<sup>Optional</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.compatibilityDate"></a>

- *Type:* str

Date indicating targeted support in the Workers runtime.

Backwards incompatible fixes to the runtime following this date will not affect this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#compatibility_date WorkerVersion#compatibility_date}

---

##### `compatibility_flags`<sup>Optional</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.compatibilityFlags"></a>

- *Type:* typing.List[str]

Flags that enable or disable certain features in the Workers runtime.

Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#compatibility_flags WorkerVersion#compatibility_flags}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.limits"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

Resource limits enforced at runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#limits WorkerVersion#limits}

---

##### `main_module`<sup>Optional</sup> <a name="main_module" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.mainModule"></a>

- *Type:* str

The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#main_module WorkerVersion#main_module}

---

##### `migrations`<sup>Optional</sup> <a name="migrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.migrations"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#migrations WorkerVersion#migrations}

---

##### `modules`<sup>Optional</sup> <a name="modules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.modules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>]]

Code, sourcemaps, and other content used at runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#modules WorkerVersion#modules}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.placement"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

Placement settings for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#placement WorkerVersion#placement}

---

##### `usage_model`<sup>Optional</sup> <a name="usage_model" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.usageModel"></a>

- *Type:* str

Usage model for the version. Available values: "standard", "bundled", "unbound".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#usage_model WorkerVersion#usage_model}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations">put_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets">put_assets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putBindings">put_bindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putLimits">put_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations">put_migrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putModules">put_modules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putPlacement">put_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAssets">reset_assets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetBindings">reset_bindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityDate">reset_compatibility_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityFlags">reset_compatibility_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetLimits">reset_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMainModule">reset_main_module</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMigrations">reset_migrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetModules">reset_modules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetPlacement">reset_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetUsageModel">reset_usage_model</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_annotations` <a name="put_annotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations"></a>

```python
def put_annotations(
  workers_message: str = None,
  workers_tag: str = None
) -> None
```

###### `workers_message`<sup>Optional</sup> <a name="workers_message" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations.parameter.workersMessage"></a>

- *Type:* str

Human-readable message about the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#workers_message WorkerVersion#workers_message}

---

###### `workers_tag`<sup>Optional</sup> <a name="workers_tag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations.parameter.workersTag"></a>

- *Type:* str

User-provided identifier for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#workers_tag WorkerVersion#workers_tag}

---

##### `put_assets` <a name="put_assets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets"></a>

```python
def put_assets(
  config: WorkerVersionAssetsConfig = None,
  jwt: str = None
) -> None
```

###### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#config WorkerVersion#config}

---

###### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets.parameter.jwt"></a>

- *Type:* str

Token provided upon successful upload of all files from a registered manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#jwt WorkerVersion#jwt}

---

##### `put_bindings` <a name="put_bindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putBindings"></a>

```python
def put_bindings(
  value: typing.Union[IResolvable, typing.List[WorkerVersionBindings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putBindings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>]]

---

##### `put_limits` <a name="put_limits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putLimits"></a>

```python
def put_limits(
  cpu_ms: typing.Union[int, float]
) -> None
```

###### `cpu_ms`<sup>Required</sup> <a name="cpu_ms" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putLimits.parameter.cpuMs"></a>

- *Type:* typing.Union[int, float]

CPU time limit in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#cpu_ms WorkerVersion#cpu_ms}

---

##### `put_migrations` <a name="put_migrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations"></a>

```python
def put_migrations(
  deleted_classes: typing.List[str] = None,
  new_classes: typing.List[str] = None,
  new_sqlite_classes: typing.List[str] = None,
  new_tag: str = None,
  old_tag: str = None,
  renamed_classes: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsRenamedClasses]] = None,
  steps: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsSteps]] = None,
  transferred_classes: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsTransferredClasses]] = None
) -> None
```

###### `deleted_classes`<sup>Optional</sup> <a name="deleted_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations.parameter.deletedClasses"></a>

- *Type:* typing.List[str]

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#deleted_classes WorkerVersion#deleted_classes}

---

###### `new_classes`<sup>Optional</sup> <a name="new_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations.parameter.newClasses"></a>

- *Type:* typing.List[str]

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#new_classes WorkerVersion#new_classes}

---

###### `new_sqlite_classes`<sup>Optional</sup> <a name="new_sqlite_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations.parameter.newSqliteClasses"></a>

- *Type:* typing.List[str]

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#new_sqlite_classes WorkerVersion#new_sqlite_classes}

---

###### `new_tag`<sup>Optional</sup> <a name="new_tag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations.parameter.newTag"></a>

- *Type:* str

Tag to set as the latest migration tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#new_tag WorkerVersion#new_tag}

---

###### `old_tag`<sup>Optional</sup> <a name="old_tag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations.parameter.oldTag"></a>

- *Type:* str

Tag used to verify against the latest migration tag for this Worker.

If they don't match, the upload is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#old_tag WorkerVersion#old_tag}

---

###### `renamed_classes`<sup>Optional</sup> <a name="renamed_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations.parameter.renamedClasses"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>]]

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#renamed_classes WorkerVersion#renamed_classes}

---

###### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations.parameter.steps"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>]]

Migrations to apply in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#steps WorkerVersion#steps}

---

###### `transferred_classes`<sup>Optional</sup> <a name="transferred_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations.parameter.transferredClasses"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>]]

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#transferred_classes WorkerVersion#transferred_classes}

---

##### `put_modules` <a name="put_modules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putModules"></a>

```python
def put_modules(
  value: typing.Union[IResolvable, typing.List[WorkerVersionModules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putModules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>]]

---

##### `put_placement` <a name="put_placement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putPlacement"></a>

```python
def put_placement(
  mode: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putPlacement.parameter.mode"></a>

- *Type:* str

Placement mode for the version. Available values: "smart".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#mode WorkerVersion#mode}

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_assets` <a name="reset_assets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAssets"></a>

```python
def reset_assets() -> None
```

##### `reset_bindings` <a name="reset_bindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetBindings"></a>

```python
def reset_bindings() -> None
```

##### `reset_compatibility_date` <a name="reset_compatibility_date" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityDate"></a>

```python
def reset_compatibility_date() -> None
```

##### `reset_compatibility_flags` <a name="reset_compatibility_flags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityFlags"></a>

```python
def reset_compatibility_flags() -> None
```

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetLimits"></a>

```python
def reset_limits() -> None
```

##### `reset_main_module` <a name="reset_main_module" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMainModule"></a>

```python
def reset_main_module() -> None
```

##### `reset_migrations` <a name="reset_migrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMigrations"></a>

```python
def reset_migrations() -> None
```

##### `reset_modules` <a name="reset_modules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetModules"></a>

```python
def reset_modules() -> None
```

##### `reset_placement` <a name="reset_placement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetPlacement"></a>

```python
def reset_placement() -> None
```

##### `reset_usage_model` <a name="reset_usage_model" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetUsageModel"></a>

```python
def reset_usage_model() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WorkerVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WorkerVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkerVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkerVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkerVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotations">annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference">WorkerVersionAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference">WorkerVersionAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindings">bindings</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList">WorkerVersionBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference">WorkerVersionLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrations">migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference">WorkerVersionMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modules">modules</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList">WorkerVersionModulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.number">number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference">WorkerVersionPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotationsInput">annotations_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assetsInput">assets_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindingsInput">bindings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDateInput">compatibility_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlagsInput">compatibility_flags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limitsInput">limits_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModuleInput">main_module_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrationsInput">migrations_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modulesInput">modules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placementInput">placement_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModelInput">usage_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerIdInput">worker_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDate">compatibility_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModule">main_module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModel">usage_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerId">worker_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotations"></a>

```python
annotations: WorkerVersionAnnotationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference">WorkerVersionAnnotationsOutputReference</a>

---

##### `assets`<sup>Required</sup> <a name="assets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assets"></a>

```python
assets: WorkerVersionAssetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference">WorkerVersionAssetsOutputReference</a>

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindings"></a>

```python
bindings: WorkerVersionBindingsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList">WorkerVersionBindingsList</a>

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limits"></a>

```python
limits: WorkerVersionLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference">WorkerVersionLimitsOutputReference</a>

---

##### `migrations`<sup>Required</sup> <a name="migrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrations"></a>

```python
migrations: WorkerVersionMigrationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference">WorkerVersionMigrationsOutputReference</a>

---

##### `modules`<sup>Required</sup> <a name="modules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modules"></a>

```python
modules: WorkerVersionModulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList">WorkerVersionModulesList</a>

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placement"></a>

```python
placement: WorkerVersionPlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference">WorkerVersionPlacementOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotationsInput"></a>

```python
annotations_input: typing.Union[IResolvable, WorkerVersionAnnotations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>]

---

##### `assets_input`<sup>Optional</sup> <a name="assets_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assetsInput"></a>

```python
assets_input: typing.Union[IResolvable, WorkerVersionAssets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>]

---

##### `bindings_input`<sup>Optional</sup> <a name="bindings_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindingsInput"></a>

```python
bindings_input: typing.Union[IResolvable, typing.List[WorkerVersionBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>]]

---

##### `compatibility_date_input`<sup>Optional</sup> <a name="compatibility_date_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDateInput"></a>

```python
compatibility_date_input: str
```

- *Type:* str

---

##### `compatibility_flags_input`<sup>Optional</sup> <a name="compatibility_flags_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlagsInput"></a>

```python
compatibility_flags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limitsInput"></a>

```python
limits_input: typing.Union[IResolvable, WorkerVersionLimits]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>]

---

##### `main_module_input`<sup>Optional</sup> <a name="main_module_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModuleInput"></a>

```python
main_module_input: str
```

- *Type:* str

---

##### `migrations_input`<sup>Optional</sup> <a name="migrations_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrationsInput"></a>

```python
migrations_input: typing.Union[IResolvable, WorkerVersionMigrations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>]

---

##### `modules_input`<sup>Optional</sup> <a name="modules_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modulesInput"></a>

```python
modules_input: typing.Union[IResolvable, typing.List[WorkerVersionModules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>]]

---

##### `placement_input`<sup>Optional</sup> <a name="placement_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placementInput"></a>

```python
placement_input: typing.Union[IResolvable, WorkerVersionPlacement]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>]

---

##### `usage_model_input`<sup>Optional</sup> <a name="usage_model_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModelInput"></a>

```python
usage_model_input: str
```

- *Type:* str

---

##### `worker_id_input`<sup>Optional</sup> <a name="worker_id_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerIdInput"></a>

```python
worker_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `compatibility_date`<sup>Required</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDate"></a>

```python
compatibility_date: str
```

- *Type:* str

---

##### `compatibility_flags`<sup>Required</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlags"></a>

```python
compatibility_flags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_module`<sup>Required</sup> <a name="main_module" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModule"></a>

```python
main_module: str
```

- *Type:* str

---

##### `usage_model`<sup>Required</sup> <a name="usage_model" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModel"></a>

```python
usage_model: str
```

- *Type:* str

---

##### `worker_id`<sup>Required</sup> <a name="worker_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerId"></a>

```python
worker_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkerVersionAnnotations <a name="WorkerVersionAnnotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionAnnotations(
  workers_message: str = None,
  workers_tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersMessage">workers_message</a></code> | <code>str</code> | Human-readable message about the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersTag">workers_tag</a></code> | <code>str</code> | User-provided identifier for the version. |

---

##### `workers_message`<sup>Optional</sup> <a name="workers_message" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersMessage"></a>

```python
workers_message: str
```

- *Type:* str

Human-readable message about the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#workers_message WorkerVersion#workers_message}

---

##### `workers_tag`<sup>Optional</sup> <a name="workers_tag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersTag"></a>

```python
workers_tag: str
```

- *Type:* str

User-provided identifier for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#workers_tag WorkerVersion#workers_tag}

---

### WorkerVersionAssets <a name="WorkerVersionAssets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionAssets(
  config: WorkerVersionAssetsConfig = None,
  jwt: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.jwt">jwt</a></code> | <code>str</code> | Token provided upon successful upload of all files from a registered manifest. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.config"></a>

```python
config: WorkerVersionAssetsConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#config WorkerVersion#config}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.jwt"></a>

```python
jwt: str
```

- *Type:* str

Token provided upon successful upload of all files from a registered manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#jwt WorkerVersion#jwt}

---

### WorkerVersionAssetsConfig <a name="WorkerVersionAssetsConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionAssetsConfig(
  html_handling: str = None,
  not_found_handling: str = None,
  run_worker_first: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.htmlHandling">html_handling</a></code> | <code>str</code> | Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.notFoundHandling">not_found_handling</a></code> | <code>str</code> | Determines the response when a request does not match a static asset, and there is no Worker script. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.runWorkerFirst">run_worker_first</a></code> | <code>typing.List[str]</code> | Contains a list path rules to control routing to either the Worker or assets. |

---

##### `html_handling`<sup>Optional</sup> <a name="html_handling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.htmlHandling"></a>

```python
html_handling: str
```

- *Type:* str

Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#html_handling WorkerVersion#html_handling}

---

##### `not_found_handling`<sup>Optional</sup> <a name="not_found_handling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.notFoundHandling"></a>

```python
not_found_handling: str
```

- *Type:* str

Determines the response when a request does not match a static asset, and there is no Worker script.

Available values: "none", "404-page", "single-page-application".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#not_found_handling WorkerVersion#not_found_handling}

---

##### `run_worker_first`<sup>Optional</sup> <a name="run_worker_first" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.runWorkerFirst"></a>

```python
run_worker_first: typing.List[str]
```

- *Type:* typing.List[str]

Contains a list path rules to control routing to either the Worker or assets.

Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#run_worker_first WorkerVersion#run_worker_first}

---

### WorkerVersionBindings <a name="WorkerVersionBindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionBindings(
  name: str,
  type: str,
  algorithm: str = None,
  bucket_name: str = None,
  certificate_id: str = None,
  class_name: str = None,
  dataset: str = None,
  environment: str = None,
  format: str = None,
  id: str = None,
  index_name: str = None,
  json: str = None,
  key_base64: str = None,
  key_jwk: str = None,
  namespace: str = None,
  namespace_id: str = None,
  outbound: WorkerVersionBindingsOutbound = None,
  pipeline: str = None,
  queue_name: str = None,
  script_name: str = None,
  secret_name: str = None,
  service: str = None,
  store_id: str = None,
  text: str = None,
  usages: typing.List[str] = None,
  workflow_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.name">name</a></code> | <code>str</code> | A JavaScript variable name for the binding. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.type">type</a></code> | <code>str</code> | The kind of resource that the binding provides. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.algorithm">algorithm</a></code> | <code>str</code> | Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.bucketName">bucket_name</a></code> | <code>str</code> | R2 bucket to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.certificateId">certificate_id</a></code> | <code>str</code> | Identifier of the certificate to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.className">class_name</a></code> | <code>str</code> | The exported class name of the Durable Object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.dataset">dataset</a></code> | <code>str</code> | The name of the dataset to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.environment">environment</a></code> | <code>str</code> | The environment of the script_name to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.format">format</a></code> | <code>str</code> | Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.id">id</a></code> | <code>str</code> | Identifier of the D1 database to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.indexName">index_name</a></code> | <code>str</code> | Name of the Vectorize index to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.json">json</a></code> | <code>str</code> | JSON data to use. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyBase64">key_base64</a></code> | <code>str</code> | Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyJwk">key_jwk</a></code> | <code>str</code> | Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespace">namespace</a></code> | <code>str</code> | Namespace to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespaceId">namespace_id</a></code> | <code>str</code> | Namespace identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.outbound">outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a></code> | Outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.pipeline">pipeline</a></code> | <code>str</code> | Name of the Pipeline to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.queueName">queue_name</a></code> | <code>str</code> | Name of the Queue to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.scriptName">script_name</a></code> | <code>str</code> | The script where the Durable Object is defined, if it is external to this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.secretName">secret_name</a></code> | <code>str</code> | Name of the secret in the store. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.service">service</a></code> | <code>str</code> | Name of Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.storeId">store_id</a></code> | <code>str</code> | ID of the store containing the secret. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.text">text</a></code> | <code>str</code> | The text value to use. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.usages">usages</a></code> | <code>typing.List[str]</code> | Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.workflowName">workflow_name</a></code> | <code>str</code> | Name of the Workflow to bind to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.name"></a>

```python
name: str
```

- *Type:* str

A JavaScript variable name for the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#name WorkerVersion#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.type"></a>

```python
type: str
```

- *Type:* str

The kind of resource that the binding provides.

Available values: "ai", "analytics_engine", "assets", "browser", "d1", "dispatch_namespace", "durable_object_namespace", "hyperdrive", "json", "kv_namespace", "mtls_certificate", "plain_text", "pipelines", "queue", "r2_bucket", "secret_text", "service", "tail_consumer", "vectorize", "version_metadata", "secrets_store_secret", "secret_key", "workflow".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#type WorkerVersion#type}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#algorithm WorkerVersion#algorithm}

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

R2 bucket to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#bucket_name WorkerVersion#bucket_name}

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

Identifier of the certificate to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#certificate_id WorkerVersion#certificate_id}

---

##### `class_name`<sup>Optional</sup> <a name="class_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.className"></a>

```python
class_name: str
```

- *Type:* str

The exported class name of the Durable Object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#class_name WorkerVersion#class_name}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

The name of the dataset to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#dataset WorkerVersion#dataset}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.environment"></a>

```python
environment: str
```

- *Type:* str

The environment of the script_name to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#environment WorkerVersion#environment}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.format"></a>

```python
format: str
```

- *Type:* str

Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#format WorkerVersion#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.id"></a>

```python
id: str
```

- *Type:* str

Identifier of the D1 database to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#id WorkerVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index_name`<sup>Optional</sup> <a name="index_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

Name of the Vectorize index to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#index_name WorkerVersion#index_name}

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.json"></a>

```python
json: str
```

- *Type:* str

JSON data to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#json WorkerVersion#json}

---

##### `key_base64`<sup>Optional</sup> <a name="key_base64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyBase64"></a>

```python
key_base64: str
```

- *Type:* str

Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#key_base64 WorkerVersion#key_base64}

---

##### `key_jwk`<sup>Optional</sup> <a name="key_jwk" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyJwk"></a>

```python
key_jwk: str
```

- *Type:* str

Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#key_jwk WorkerVersion#key_jwk}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#namespace WorkerVersion#namespace}

---

##### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

Namespace identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#namespace_id WorkerVersion#namespace_id}

---

##### `outbound`<sup>Optional</sup> <a name="outbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.outbound"></a>

```python
outbound: WorkerVersionBindingsOutbound
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#outbound WorkerVersion#outbound}

---

##### `pipeline`<sup>Optional</sup> <a name="pipeline" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.pipeline"></a>

```python
pipeline: str
```

- *Type:* str

Name of the Pipeline to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#pipeline WorkerVersion#pipeline}

---

##### `queue_name`<sup>Optional</sup> <a name="queue_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

Name of the Queue to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#queue_name WorkerVersion#queue_name}

---

##### `script_name`<sup>Optional</sup> <a name="script_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.scriptName"></a>

```python
script_name: str
```

- *Type:* str

The script where the Durable Object is defined, if it is external to this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#script_name WorkerVersion#script_name}

---

##### `secret_name`<sup>Optional</sup> <a name="secret_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Name of the secret in the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#secret_name WorkerVersion#secret_name}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.service"></a>

```python
service: str
```

- *Type:* str

Name of Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#service WorkerVersion#service}

---

##### `store_id`<sup>Optional</sup> <a name="store_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.storeId"></a>

```python
store_id: str
```

- *Type:* str

ID of the store containing the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#store_id WorkerVersion#store_id}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.text"></a>

```python
text: str
```

- *Type:* str

The text value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#text WorkerVersion#text}

---

##### `usages`<sup>Optional</sup> <a name="usages" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.usages"></a>

```python
usages: typing.List[str]
```

- *Type:* typing.List[str]

Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#usages WorkerVersion#usages}

---

##### `workflow_name`<sup>Optional</sup> <a name="workflow_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.workflowName"></a>

```python
workflow_name: str
```

- *Type:* str

Name of the Workflow to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#workflow_name WorkerVersion#workflow_name}

---

### WorkerVersionBindingsOutbound <a name="WorkerVersionBindingsOutbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionBindingsOutbound(
  params: typing.List[str] = None,
  worker: WorkerVersionBindingsOutboundWorker = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.params">params</a></code> | <code>typing.List[str]</code> | Pass information from the Dispatch Worker to the Outbound Worker through the parameters. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a></code> | Outbound worker. |

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.params"></a>

```python
params: typing.List[str]
```

- *Type:* typing.List[str]

Pass information from the Dispatch Worker to the Outbound Worker through the parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#params WorkerVersion#params}

---

##### `worker`<sup>Optional</sup> <a name="worker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.worker"></a>

```python
worker: WorkerVersionBindingsOutboundWorker
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#worker WorkerVersion#worker}

---

### WorkerVersionBindingsOutboundWorker <a name="WorkerVersionBindingsOutboundWorker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionBindingsOutboundWorker(
  environment: str = None,
  service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.environment">environment</a></code> | <code>str</code> | Environment of the outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.service">service</a></code> | <code>str</code> | Name of the outbound worker. |

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.environment"></a>

```python
environment: str
```

- *Type:* str

Environment of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#environment WorkerVersion#environment}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.service"></a>

```python
service: str
```

- *Type:* str

Name of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#service WorkerVersion#service}

---

### WorkerVersionConfig <a name="WorkerVersionConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  worker_id: str,
  annotations: WorkerVersionAnnotations = None,
  assets: WorkerVersionAssets = None,
  bindings: typing.Union[IResolvable, typing.List[WorkerVersionBindings]] = None,
  compatibility_date: str = None,
  compatibility_flags: typing.List[str] = None,
  limits: WorkerVersionLimits = None,
  main_module: str = None,
  migrations: WorkerVersionMigrations = None,
  modules: typing.Union[IResolvable, typing.List[WorkerVersionModules]] = None,
  placement: WorkerVersionPlacement = None,
  usage_model: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.workerId">worker_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.annotations">annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a></code> | Metadata about the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.bindings">bindings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>]]</code> | List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityDate">compatibility_date</a></code> | <code>str</code> | Date indicating targeted support in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityFlags">compatibility_flags</a></code> | <code>typing.List[str]</code> | Flags that enable or disable certain features in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a></code> | Resource limits enforced at runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.mainModule">main_module</a></code> | <code>str</code> | The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.migrations">migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a></code> | Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.modules">modules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>]]</code> | Code, sourcemaps, and other content used at runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a></code> | Placement settings for the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.usageModel">usage_model</a></code> | <code>str</code> | Usage model for the version. Available values: "standard", "bundled", "unbound". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#account_id WorkerVersion#account_id}

---

##### `worker_id`<sup>Required</sup> <a name="worker_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.workerId"></a>

```python
worker_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#worker_id WorkerVersion#worker_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.annotations"></a>

```python
annotations: WorkerVersionAnnotations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

Metadata about the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#annotations WorkerVersion#annotations}

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.assets"></a>

```python
assets: WorkerVersionAssets
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#assets WorkerVersion#assets}

---

##### `bindings`<sup>Optional</sup> <a name="bindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.bindings"></a>

```python
bindings: typing.Union[IResolvable, typing.List[WorkerVersionBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>]]

List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#bindings WorkerVersion#bindings}

---

##### `compatibility_date`<sup>Optional</sup> <a name="compatibility_date" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityDate"></a>

```python
compatibility_date: str
```

- *Type:* str

Date indicating targeted support in the Workers runtime.

Backwards incompatible fixes to the runtime following this date will not affect this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#compatibility_date WorkerVersion#compatibility_date}

---

##### `compatibility_flags`<sup>Optional</sup> <a name="compatibility_flags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityFlags"></a>

```python
compatibility_flags: typing.List[str]
```

- *Type:* typing.List[str]

Flags that enable or disable certain features in the Workers runtime.

Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#compatibility_flags WorkerVersion#compatibility_flags}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.limits"></a>

```python
limits: WorkerVersionLimits
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

Resource limits enforced at runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#limits WorkerVersion#limits}

---

##### `main_module`<sup>Optional</sup> <a name="main_module" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.mainModule"></a>

```python
main_module: str
```

- *Type:* str

The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#main_module WorkerVersion#main_module}

---

##### `migrations`<sup>Optional</sup> <a name="migrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.migrations"></a>

```python
migrations: WorkerVersionMigrations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#migrations WorkerVersion#migrations}

---

##### `modules`<sup>Optional</sup> <a name="modules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.modules"></a>

```python
modules: typing.Union[IResolvable, typing.List[WorkerVersionModules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>]]

Code, sourcemaps, and other content used at runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#modules WorkerVersion#modules}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.placement"></a>

```python
placement: WorkerVersionPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

Placement settings for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#placement WorkerVersion#placement}

---

##### `usage_model`<sup>Optional</sup> <a name="usage_model" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.usageModel"></a>

```python
usage_model: str
```

- *Type:* str

Usage model for the version. Available values: "standard", "bundled", "unbound".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#usage_model WorkerVersion#usage_model}

---

### WorkerVersionLimits <a name="WorkerVersionLimits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionLimits(
  cpu_ms: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits.property.cpuMs">cpu_ms</a></code> | <code>typing.Union[int, float]</code> | CPU time limit in milliseconds. |

---

##### `cpu_ms`<sup>Required</sup> <a name="cpu_ms" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits.property.cpuMs"></a>

```python
cpu_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

CPU time limit in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#cpu_ms WorkerVersion#cpu_ms}

---

### WorkerVersionMigrations <a name="WorkerVersionMigrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrations(
  deleted_classes: typing.List[str] = None,
  new_classes: typing.List[str] = None,
  new_sqlite_classes: typing.List[str] = None,
  new_tag: str = None,
  old_tag: str = None,
  renamed_classes: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsRenamedClasses]] = None,
  steps: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsSteps]] = None,
  transferred_classes: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsTransferredClasses]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.deletedClasses">deleted_classes</a></code> | <code>typing.List[str]</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newClasses">new_classes</a></code> | <code>typing.List[str]</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newSqliteClasses">new_sqlite_classes</a></code> | <code>typing.List[str]</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newTag">new_tag</a></code> | <code>str</code> | Tag to set as the latest migration tag. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.oldTag">old_tag</a></code> | <code>str</code> | Tag used to verify against the latest migration tag for this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.renamedClasses">renamed_classes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>]]</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.steps">steps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>]]</code> | Migrations to apply in order. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.transferredClasses">transferred_classes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>]]</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `deleted_classes`<sup>Optional</sup> <a name="deleted_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.deletedClasses"></a>

```python
deleted_classes: typing.List[str]
```

- *Type:* typing.List[str]

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#deleted_classes WorkerVersion#deleted_classes}

---

##### `new_classes`<sup>Optional</sup> <a name="new_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newClasses"></a>

```python
new_classes: typing.List[str]
```

- *Type:* typing.List[str]

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#new_classes WorkerVersion#new_classes}

---

##### `new_sqlite_classes`<sup>Optional</sup> <a name="new_sqlite_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newSqliteClasses"></a>

```python
new_sqlite_classes: typing.List[str]
```

- *Type:* typing.List[str]

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#new_sqlite_classes WorkerVersion#new_sqlite_classes}

---

##### `new_tag`<sup>Optional</sup> <a name="new_tag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newTag"></a>

```python
new_tag: str
```

- *Type:* str

Tag to set as the latest migration tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#new_tag WorkerVersion#new_tag}

---

##### `old_tag`<sup>Optional</sup> <a name="old_tag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.oldTag"></a>

```python
old_tag: str
```

- *Type:* str

Tag used to verify against the latest migration tag for this Worker.

If they don't match, the upload is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#old_tag WorkerVersion#old_tag}

---

##### `renamed_classes`<sup>Optional</sup> <a name="renamed_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.renamedClasses"></a>

```python
renamed_classes: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsRenamedClasses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>]]

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#renamed_classes WorkerVersion#renamed_classes}

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.steps"></a>

```python
steps: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>]]

Migrations to apply in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#steps WorkerVersion#steps}

---

##### `transferred_classes`<sup>Optional</sup> <a name="transferred_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.transferredClasses"></a>

```python
transferred_classes: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsTransferredClasses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>]]

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#transferred_classes WorkerVersion#transferred_classes}

---

### WorkerVersionMigrationsRenamedClasses <a name="WorkerVersionMigrationsRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsRenamedClasses(
  from: str = None,
  to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.to">to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.to"></a>

```python
to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionMigrationsSteps <a name="WorkerVersionMigrationsSteps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsSteps(
  deleted_classes: typing.List[str] = None,
  new_classes: typing.List[str] = None,
  new_sqlite_classes: typing.List[str] = None,
  renamed_classes: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsStepsRenamedClasses]] = None,
  transferred_classes: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsStepsTransferredClasses]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.deletedClasses">deleted_classes</a></code> | <code>typing.List[str]</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newClasses">new_classes</a></code> | <code>typing.List[str]</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newSqliteClasses">new_sqlite_classes</a></code> | <code>typing.List[str]</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.renamedClasses">renamed_classes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>]]</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.transferredClasses">transferred_classes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>]]</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `deleted_classes`<sup>Optional</sup> <a name="deleted_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.deletedClasses"></a>

```python
deleted_classes: typing.List[str]
```

- *Type:* typing.List[str]

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#deleted_classes WorkerVersion#deleted_classes}

---

##### `new_classes`<sup>Optional</sup> <a name="new_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newClasses"></a>

```python
new_classes: typing.List[str]
```

- *Type:* typing.List[str]

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#new_classes WorkerVersion#new_classes}

---

##### `new_sqlite_classes`<sup>Optional</sup> <a name="new_sqlite_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newSqliteClasses"></a>

```python
new_sqlite_classes: typing.List[str]
```

- *Type:* typing.List[str]

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#new_sqlite_classes WorkerVersion#new_sqlite_classes}

---

##### `renamed_classes`<sup>Optional</sup> <a name="renamed_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.renamedClasses"></a>

```python
renamed_classes: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsStepsRenamedClasses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>]]

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#renamed_classes WorkerVersion#renamed_classes}

---

##### `transferred_classes`<sup>Optional</sup> <a name="transferred_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.transferredClasses"></a>

```python
transferred_classes: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsStepsTransferredClasses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>]]

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#transferred_classes WorkerVersion#transferred_classes}

---

### WorkerVersionMigrationsStepsRenamedClasses <a name="WorkerVersionMigrationsStepsRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsStepsRenamedClasses(
  from: str = None,
  to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.to">to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.to"></a>

```python
to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionMigrationsStepsTransferredClasses <a name="WorkerVersionMigrationsStepsTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsStepsTransferredClasses(
  from: str = None,
  from_script: str = None,
  to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.fromScript">from_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from_script WorkerVersion#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.to">to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `from_script`<sup>Optional</sup> <a name="from_script" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.fromScript"></a>

```python
from_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from_script WorkerVersion#from_script}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.to"></a>

```python
to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionMigrationsTransferredClasses <a name="WorkerVersionMigrationsTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsTransferredClasses(
  from: str = None,
  from_script: str = None,
  to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.fromScript">from_script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from_script WorkerVersion#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.to">to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `from_script`<sup>Optional</sup> <a name="from_script" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.fromScript"></a>

```python
from_script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#from_script WorkerVersion#from_script}.

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.to"></a>

```python
to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionModules <a name="WorkerVersionModules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionModules(
  content_file: str,
  content_type: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentFile">content_file</a></code> | <code>str</code> | The file path of the module content. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentType">content_type</a></code> | <code>str</code> | The content type of the module. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.name">name</a></code> | <code>str</code> | The name of the module. |

---

##### `content_file`<sup>Required</sup> <a name="content_file" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentFile"></a>

```python
content_file: str
```

- *Type:* str

The file path of the module content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#content_file WorkerVersion#content_file}

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

The content type of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#content_type WorkerVersion#content_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#name WorkerVersion#name}

---

### WorkerVersionPlacement <a name="WorkerVersionPlacement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionPlacement(
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement.property.mode">mode</a></code> | <code>str</code> | Placement mode for the version. Available values: "smart". |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement.property.mode"></a>

```python
mode: str
```

- *Type:* str

Placement mode for the version. Available values: "smart".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#mode WorkerVersion#mode}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkerVersionAnnotationsOutputReference <a name="WorkerVersionAnnotationsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionAnnotationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersMessage">reset_workers_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersTag">reset_workers_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workers_message` <a name="reset_workers_message" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersMessage"></a>

```python
def reset_workers_message() -> None
```

##### `reset_workers_tag` <a name="reset_workers_tag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersTag"></a>

```python
def reset_workers_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTriggeredBy">workers_triggered_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessageInput">workers_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTagInput">workers_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessage">workers_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTag">workers_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workers_triggered_by`<sup>Required</sup> <a name="workers_triggered_by" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTriggeredBy"></a>

```python
workers_triggered_by: str
```

- *Type:* str

---

##### `workers_message_input`<sup>Optional</sup> <a name="workers_message_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessageInput"></a>

```python
workers_message_input: str
```

- *Type:* str

---

##### `workers_tag_input`<sup>Optional</sup> <a name="workers_tag_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTagInput"></a>

```python
workers_tag_input: str
```

- *Type:* str

---

##### `workers_message`<sup>Required</sup> <a name="workers_message" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessage"></a>

```python
workers_message: str
```

- *Type:* str

---

##### `workers_tag`<sup>Required</sup> <a name="workers_tag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTag"></a>

```python
workers_tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerVersionAnnotations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>]

---


### WorkerVersionAssetsConfigOutputReference <a name="WorkerVersionAssetsConfigOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionAssetsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetHtmlHandling">reset_html_handling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetNotFoundHandling">reset_not_found_handling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetRunWorkerFirst">reset_run_worker_first</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_html_handling` <a name="reset_html_handling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetHtmlHandling"></a>

```python
def reset_html_handling() -> None
```

##### `reset_not_found_handling` <a name="reset_not_found_handling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetNotFoundHandling"></a>

```python
def reset_not_found_handling() -> None
```

##### `reset_run_worker_first` <a name="reset_run_worker_first" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetRunWorkerFirst"></a>

```python
def reset_run_worker_first() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandlingInput">html_handling_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandlingInput">not_found_handling_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirstInput">run_worker_first_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandling">html_handling</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandling">not_found_handling</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirst">run_worker_first</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `html_handling_input`<sup>Optional</sup> <a name="html_handling_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandlingInput"></a>

```python
html_handling_input: str
```

- *Type:* str

---

##### `not_found_handling_input`<sup>Optional</sup> <a name="not_found_handling_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandlingInput"></a>

```python
not_found_handling_input: str
```

- *Type:* str

---

##### `run_worker_first_input`<sup>Optional</sup> <a name="run_worker_first_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirstInput"></a>

```python
run_worker_first_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `html_handling`<sup>Required</sup> <a name="html_handling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandling"></a>

```python
html_handling: str
```

- *Type:* str

---

##### `not_found_handling`<sup>Required</sup> <a name="not_found_handling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandling"></a>

```python
not_found_handling: str
```

- *Type:* str

---

##### `run_worker_first`<sup>Required</sup> <a name="run_worker_first" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirst"></a>

```python
run_worker_first: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerVersionAssetsConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>]

---


### WorkerVersionAssetsOutputReference <a name="WorkerVersionAssetsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionAssetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetJwt">reset_jwt</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config` <a name="put_config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig"></a>

```python
def put_config(
  html_handling: str = None,
  not_found_handling: str = None,
  run_worker_first: typing.List[str] = None
) -> None
```

###### `html_handling`<sup>Optional</sup> <a name="html_handling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig.parameter.htmlHandling"></a>

- *Type:* str

Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#html_handling WorkerVersion#html_handling}

---

###### `not_found_handling`<sup>Optional</sup> <a name="not_found_handling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig.parameter.notFoundHandling"></a>

- *Type:* str

Determines the response when a request does not match a static asset, and there is no Worker script.

Available values: "none", "404-page", "single-page-application".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#not_found_handling WorkerVersion#not_found_handling}

---

###### `run_worker_first`<sup>Optional</sup> <a name="run_worker_first" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig.parameter.runWorkerFirst"></a>

- *Type:* typing.List[str]

Contains a list path rules to control routing to either the Worker or assets.

Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#run_worker_first WorkerVersion#run_worker_first}

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_jwt` <a name="reset_jwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetJwt"></a>

```python
def reset_jwt() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference">WorkerVersionAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.configInput">config_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwtInput">jwt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwt">jwt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.config"></a>

```python
config: WorkerVersionAssetsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference">WorkerVersionAssetsConfigOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.configInput"></a>

```python
config_input: typing.Union[IResolvable, WorkerVersionAssetsConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>]

---

##### `jwt_input`<sup>Optional</sup> <a name="jwt_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwtInput"></a>

```python
jwt_input: str
```

- *Type:* str

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwt"></a>

```python
jwt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerVersionAssets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>]

---


### WorkerVersionBindingsList <a name="WorkerVersionBindingsList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionBindingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerVersionBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkerVersionBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>]]

---


### WorkerVersionBindingsOutboundOutputReference <a name="WorkerVersionBindingsOutboundOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionBindingsOutboundOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker">put_worker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetParams">reset_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetWorker">reset_worker</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_worker` <a name="put_worker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker"></a>

```python
def put_worker(
  environment: str = None,
  service: str = None
) -> None
```

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker.parameter.environment"></a>

- *Type:* str

Environment of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#environment WorkerVersion#environment}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker.parameter.service"></a>

- *Type:* str

Name of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#service WorkerVersion#service}

---

##### `reset_params` <a name="reset_params" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetParams"></a>

```python
def reset_params() -> None
```

##### `reset_worker` <a name="reset_worker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetWorker"></a>

```python
def reset_worker() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference">WorkerVersionBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.paramsInput">params_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.workerInput">worker_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.params">params</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `worker`<sup>Required</sup> <a name="worker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.worker"></a>

```python
worker: WorkerVersionBindingsOutboundWorkerOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference">WorkerVersionBindingsOutboundWorkerOutputReference</a>

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.paramsInput"></a>

```python
params_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `worker_input`<sup>Optional</sup> <a name="worker_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.workerInput"></a>

```python
worker_input: typing.Union[IResolvable, WorkerVersionBindingsOutboundWorker]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>]

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.params"></a>

```python
params: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerVersionBindingsOutbound]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>]

---


### WorkerVersionBindingsOutboundWorkerOutputReference <a name="WorkerVersionBindingsOutboundWorkerOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerVersionBindingsOutboundWorker]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>]

---


### WorkerVersionBindingsOutputReference <a name="WorkerVersionBindingsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionBindingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound">put_outbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetCertificateId">reset_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetClassName">reset_class_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDataset">reset_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetIndexName">reset_index_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJson">reset_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyBase64">reset_key_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyJwk">reset_key_jwk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespaceId">reset_namespace_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOutbound">reset_outbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPipeline">reset_pipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetQueueName">reset_queue_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetScriptName">reset_script_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetSecretName">reset_secret_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetStoreId">reset_store_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetUsages">reset_usages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetWorkflowName">reset_workflow_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_outbound` <a name="put_outbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound"></a>

```python
def put_outbound(
  params: typing.List[str] = None,
  worker: WorkerVersionBindingsOutboundWorker = None
) -> None
```

###### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound.parameter.params"></a>

- *Type:* typing.List[str]

Pass information from the Dispatch Worker to the Outbound Worker through the parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#params WorkerVersion#params}

---

###### `worker`<sup>Optional</sup> <a name="worker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound.parameter.worker"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/worker_version#worker WorkerVersion#worker}

---

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_certificate_id` <a name="reset_certificate_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetCertificateId"></a>

```python
def reset_certificate_id() -> None
```

##### `reset_class_name` <a name="reset_class_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetClassName"></a>

```python
def reset_class_name() -> None
```

##### `reset_dataset` <a name="reset_dataset" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDataset"></a>

```python
def reset_dataset() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_index_name` <a name="reset_index_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetIndexName"></a>

```python
def reset_index_name() -> None
```

##### `reset_json` <a name="reset_json" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJson"></a>

```python
def reset_json() -> None
```

##### `reset_key_base64` <a name="reset_key_base64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyBase64"></a>

```python
def reset_key_base64() -> None
```

##### `reset_key_jwk` <a name="reset_key_jwk" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyJwk"></a>

```python
def reset_key_jwk() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_namespace_id` <a name="reset_namespace_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespaceId"></a>

```python
def reset_namespace_id() -> None
```

##### `reset_outbound` <a name="reset_outbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOutbound"></a>

```python
def reset_outbound() -> None
```

##### `reset_pipeline` <a name="reset_pipeline" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPipeline"></a>

```python
def reset_pipeline() -> None
```

##### `reset_queue_name` <a name="reset_queue_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetQueueName"></a>

```python
def reset_queue_name() -> None
```

##### `reset_script_name` <a name="reset_script_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetScriptName"></a>

```python
def reset_script_name() -> None
```

##### `reset_secret_name` <a name="reset_secret_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetSecretName"></a>

```python
def reset_secret_name() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_store_id` <a name="reset_store_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetStoreId"></a>

```python
def reset_store_id() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_usages` <a name="reset_usages" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetUsages"></a>

```python
def reset_usages() -> None
```

##### `reset_workflow_name` <a name="reset_workflow_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetWorkflowName"></a>

```python
def reset_workflow_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outbound">outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference">WorkerVersionBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateIdInput">certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.classNameInput">class_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexNameInput">index_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jsonInput">json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64Input">key_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwkInput">key_jwk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outboundInput">outbound_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipelineInput">pipeline_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueNameInput">queue_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptNameInput">script_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeIdInput">store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usagesInput">usages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowNameInput">workflow_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.className">class_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.json">json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64">key_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwk">key_jwk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipeline">pipeline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueName">queue_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptName">script_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeId">store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usages">usages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowName">workflow_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `outbound`<sup>Required</sup> <a name="outbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outbound"></a>

```python
outbound: WorkerVersionBindingsOutboundOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference">WorkerVersionBindingsOutboundOutputReference</a>

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `certificate_id_input`<sup>Optional</sup> <a name="certificate_id_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateIdInput"></a>

```python
certificate_id_input: str
```

- *Type:* str

---

##### `class_name_input`<sup>Optional</sup> <a name="class_name_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.classNameInput"></a>

```python
class_name_input: str
```

- *Type:* str

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_name_input`<sup>Optional</sup> <a name="index_name_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexNameInput"></a>

```python
index_name_input: str
```

- *Type:* str

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jsonInput"></a>

```python
json_input: str
```

- *Type:* str

---

##### `key_base64_input`<sup>Optional</sup> <a name="key_base64_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64Input"></a>

```python
key_base64_input: str
```

- *Type:* str

---

##### `key_jwk_input`<sup>Optional</sup> <a name="key_jwk_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwkInput"></a>

```python
key_jwk_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `outbound_input`<sup>Optional</sup> <a name="outbound_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outboundInput"></a>

```python
outbound_input: typing.Union[IResolvable, WorkerVersionBindingsOutbound]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>]

---

##### `pipeline_input`<sup>Optional</sup> <a name="pipeline_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipelineInput"></a>

```python
pipeline_input: str
```

- *Type:* str

---

##### `queue_name_input`<sup>Optional</sup> <a name="queue_name_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueNameInput"></a>

```python
queue_name_input: str
```

- *Type:* str

---

##### `script_name_input`<sup>Optional</sup> <a name="script_name_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptNameInput"></a>

```python
script_name_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `store_id_input`<sup>Optional</sup> <a name="store_id_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeIdInput"></a>

```python
store_id_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `usages_input`<sup>Optional</sup> <a name="usages_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usagesInput"></a>

```python
usages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `workflow_name_input`<sup>Optional</sup> <a name="workflow_name_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowNameInput"></a>

```python
workflow_name_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `class_name`<sup>Required</sup> <a name="class_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.className"></a>

```python
class_name: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.json"></a>

```python
json: str
```

- *Type:* str

---

##### `key_base64`<sup>Required</sup> <a name="key_base64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64"></a>

```python
key_base64: str
```

- *Type:* str

---

##### `key_jwk`<sup>Required</sup> <a name="key_jwk" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwk"></a>

```python
key_jwk: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipeline"></a>

```python
pipeline: str
```

- *Type:* str

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

---

##### `script_name`<sup>Required</sup> <a name="script_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptName"></a>

```python
script_name: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `store_id`<sup>Required</sup> <a name="store_id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeId"></a>

```python
store_id: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usages"></a>

```python
usages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `workflow_name`<sup>Required</sup> <a name="workflow_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowName"></a>

```python
workflow_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerVersionBindings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>]

---


### WorkerVersionLimitsOutputReference <a name="WorkerVersionLimitsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMsInput">cpu_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMs">cpu_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_ms_input`<sup>Optional</sup> <a name="cpu_ms_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMsInput"></a>

```python
cpu_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_ms`<sup>Required</sup> <a name="cpu_ms" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMs"></a>

```python
cpu_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerVersionLimits]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>]

---


### WorkerVersionMigrationsOutputReference <a name="WorkerVersionMigrationsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putRenamedClasses">put_renamed_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putSteps">put_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putTransferredClasses">put_transferred_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetDeletedClasses">reset_deleted_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewClasses">reset_new_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewSqliteClasses">reset_new_sqlite_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewTag">reset_new_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetOldTag">reset_old_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetRenamedClasses">reset_renamed_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetSteps">reset_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetTransferredClasses">reset_transferred_classes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_renamed_classes` <a name="put_renamed_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putRenamedClasses"></a>

```python
def put_renamed_classes(
  value: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsRenamedClasses]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>]]

---

##### `put_steps` <a name="put_steps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putSteps"></a>

```python
def put_steps(
  value: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsSteps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putSteps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>]]

---

##### `put_transferred_classes` <a name="put_transferred_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putTransferredClasses"></a>

```python
def put_transferred_classes(
  value: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsTransferredClasses]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>]]

---

##### `reset_deleted_classes` <a name="reset_deleted_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetDeletedClasses"></a>

```python
def reset_deleted_classes() -> None
```

##### `reset_new_classes` <a name="reset_new_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewClasses"></a>

```python
def reset_new_classes() -> None
```

##### `reset_new_sqlite_classes` <a name="reset_new_sqlite_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewSqliteClasses"></a>

```python
def reset_new_sqlite_classes() -> None
```

##### `reset_new_tag` <a name="reset_new_tag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewTag"></a>

```python
def reset_new_tag() -> None
```

##### `reset_old_tag` <a name="reset_old_tag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetOldTag"></a>

```python
def reset_old_tag() -> None
```

##### `reset_renamed_classes` <a name="reset_renamed_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetRenamedClasses"></a>

```python
def reset_renamed_classes() -> None
```

##### `reset_steps` <a name="reset_steps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetSteps"></a>

```python
def reset_steps() -> None
```

##### `reset_transferred_classes` <a name="reset_transferred_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetTransferredClasses"></a>

```python
def reset_transferred_classes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClasses">renamed_classes</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList">WorkerVersionMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList">WorkerVersionMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClasses">transferred_classes</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList">WorkerVersionMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClassesInput">deleted_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClassesInput">new_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClassesInput">new_sqlite_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTagInput">new_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTagInput">old_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClassesInput">renamed_classes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.stepsInput">steps_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClassesInput">transferred_classes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClasses">deleted_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClasses">new_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClasses">new_sqlite_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTag">new_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTag">old_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `renamed_classes`<sup>Required</sup> <a name="renamed_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClasses"></a>

```python
renamed_classes: WorkerVersionMigrationsRenamedClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList">WorkerVersionMigrationsRenamedClassesList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.steps"></a>

```python
steps: WorkerVersionMigrationsStepsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList">WorkerVersionMigrationsStepsList</a>

---

##### `transferred_classes`<sup>Required</sup> <a name="transferred_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClasses"></a>

```python
transferred_classes: WorkerVersionMigrationsTransferredClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList">WorkerVersionMigrationsTransferredClassesList</a>

---

##### `deleted_classes_input`<sup>Optional</sup> <a name="deleted_classes_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClassesInput"></a>

```python
deleted_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_classes_input`<sup>Optional</sup> <a name="new_classes_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClassesInput"></a>

```python
new_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_sqlite_classes_input`<sup>Optional</sup> <a name="new_sqlite_classes_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClassesInput"></a>

```python
new_sqlite_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_tag_input`<sup>Optional</sup> <a name="new_tag_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTagInput"></a>

```python
new_tag_input: str
```

- *Type:* str

---

##### `old_tag_input`<sup>Optional</sup> <a name="old_tag_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTagInput"></a>

```python
old_tag_input: str
```

- *Type:* str

---

##### `renamed_classes_input`<sup>Optional</sup> <a name="renamed_classes_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClassesInput"></a>

```python
renamed_classes_input: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsRenamedClasses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>]]

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.stepsInput"></a>

```python
steps_input: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>]]

---

##### `transferred_classes_input`<sup>Optional</sup> <a name="transferred_classes_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClassesInput"></a>

```python
transferred_classes_input: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsTransferredClasses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>]]

---

##### `deleted_classes`<sup>Required</sup> <a name="deleted_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClasses"></a>

```python
deleted_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_classes`<sup>Required</sup> <a name="new_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClasses"></a>

```python
new_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_sqlite_classes`<sup>Required</sup> <a name="new_sqlite_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClasses"></a>

```python
new_sqlite_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_tag`<sup>Required</sup> <a name="new_tag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTag"></a>

```python
new_tag: str
```

- *Type:* str

---

##### `old_tag`<sup>Required</sup> <a name="old_tag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTag"></a>

```python
old_tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerVersionMigrations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>]

---


### WorkerVersionMigrationsRenamedClassesList <a name="WorkerVersionMigrationsRenamedClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsRenamedClassesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerVersionMigrationsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsRenamedClasses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>]]

---


### WorkerVersionMigrationsRenamedClassesOutputReference <a name="WorkerVersionMigrationsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.toInput">to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.to">to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.toInput"></a>

```python
to_input: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.to"></a>

```python
to: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerVersionMigrationsRenamedClasses]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>]

---


### WorkerVersionMigrationsStepsList <a name="WorkerVersionMigrationsStepsList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerVersionMigrationsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>]]

---


### WorkerVersionMigrationsStepsOutputReference <a name="WorkerVersionMigrationsStepsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putRenamedClasses">put_renamed_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putTransferredClasses">put_transferred_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetDeletedClasses">reset_deleted_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewClasses">reset_new_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewSqliteClasses">reset_new_sqlite_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetRenamedClasses">reset_renamed_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetTransferredClasses">reset_transferred_classes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_renamed_classes` <a name="put_renamed_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putRenamedClasses"></a>

```python
def put_renamed_classes(
  value: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsStepsRenamedClasses]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>]]

---

##### `put_transferred_classes` <a name="put_transferred_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putTransferredClasses"></a>

```python
def put_transferred_classes(
  value: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsStepsTransferredClasses]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>]]

---

##### `reset_deleted_classes` <a name="reset_deleted_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetDeletedClasses"></a>

```python
def reset_deleted_classes() -> None
```

##### `reset_new_classes` <a name="reset_new_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewClasses"></a>

```python
def reset_new_classes() -> None
```

##### `reset_new_sqlite_classes` <a name="reset_new_sqlite_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewSqliteClasses"></a>

```python
def reset_new_sqlite_classes() -> None
```

##### `reset_renamed_classes` <a name="reset_renamed_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetRenamedClasses"></a>

```python
def reset_renamed_classes() -> None
```

##### `reset_transferred_classes` <a name="reset_transferred_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetTransferredClasses"></a>

```python
def reset_transferred_classes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClasses">renamed_classes</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList">WorkerVersionMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClasses">transferred_classes</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList">WorkerVersionMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClassesInput">deleted_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClassesInput">new_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClassesInput">new_sqlite_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClassesInput">renamed_classes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClassesInput">transferred_classes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClasses">deleted_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClasses">new_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClasses">new_sqlite_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `renamed_classes`<sup>Required</sup> <a name="renamed_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClasses"></a>

```python
renamed_classes: WorkerVersionMigrationsStepsRenamedClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList">WorkerVersionMigrationsStepsRenamedClassesList</a>

---

##### `transferred_classes`<sup>Required</sup> <a name="transferred_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClasses"></a>

```python
transferred_classes: WorkerVersionMigrationsStepsTransferredClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList">WorkerVersionMigrationsStepsTransferredClassesList</a>

---

##### `deleted_classes_input`<sup>Optional</sup> <a name="deleted_classes_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClassesInput"></a>

```python
deleted_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_classes_input`<sup>Optional</sup> <a name="new_classes_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClassesInput"></a>

```python
new_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_sqlite_classes_input`<sup>Optional</sup> <a name="new_sqlite_classes_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClassesInput"></a>

```python
new_sqlite_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `renamed_classes_input`<sup>Optional</sup> <a name="renamed_classes_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClassesInput"></a>

```python
renamed_classes_input: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsStepsRenamedClasses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>]]

---

##### `transferred_classes_input`<sup>Optional</sup> <a name="transferred_classes_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClassesInput"></a>

```python
transferred_classes_input: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsStepsTransferredClasses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>]]

---

##### `deleted_classes`<sup>Required</sup> <a name="deleted_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClasses"></a>

```python
deleted_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_classes`<sup>Required</sup> <a name="new_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClasses"></a>

```python
new_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `new_sqlite_classes`<sup>Required</sup> <a name="new_sqlite_classes" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```python
new_sqlite_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerVersionMigrationsSteps]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>]

---


### WorkerVersionMigrationsStepsRenamedClassesList <a name="WorkerVersionMigrationsStepsRenamedClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsStepsRenamedClassesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerVersionMigrationsStepsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsStepsRenamedClasses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>]]

---


### WorkerVersionMigrationsStepsRenamedClassesOutputReference <a name="WorkerVersionMigrationsStepsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.toInput">to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.to">to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.toInput"></a>

```python
to_input: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```python
to: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerVersionMigrationsStepsRenamedClasses]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>]

---


### WorkerVersionMigrationsStepsTransferredClassesList <a name="WorkerVersionMigrationsStepsTransferredClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsStepsTransferredClassesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerVersionMigrationsStepsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsStepsTransferredClasses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>]]

---


### WorkerVersionMigrationsStepsTransferredClassesOutputReference <a name="WorkerVersionMigrationsStepsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFromScript">reset_from_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_from_script` <a name="reset_from_script" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFromScript"></a>

```python
def reset_from_script() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput">from_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.toInput">to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScript">from_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.to">to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `from_script_input`<sup>Optional</sup> <a name="from_script_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput"></a>

```python
from_script_input: str
```

- *Type:* str

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.toInput"></a>

```python
to_input: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `from_script`<sup>Required</sup> <a name="from_script" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```python
from_script: str
```

- *Type:* str

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```python
to: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerVersionMigrationsStepsTransferredClasses]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>]

---


### WorkerVersionMigrationsTransferredClassesList <a name="WorkerVersionMigrationsTransferredClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsTransferredClassesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerVersionMigrationsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkerVersionMigrationsTransferredClasses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>]]

---


### WorkerVersionMigrationsTransferredClassesOutputReference <a name="WorkerVersionMigrationsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFromScript">reset_from_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_from_script` <a name="reset_from_script" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFromScript"></a>

```python
def reset_from_script() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScriptInput">from_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.toInput">to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScript">from_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.to">to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `from_script_input`<sup>Optional</sup> <a name="from_script_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScriptInput"></a>

```python
from_script_input: str
```

- *Type:* str

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.toInput"></a>

```python
to_input: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `from_script`<sup>Required</sup> <a name="from_script" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```python
from_script: str
```

- *Type:* str

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.to"></a>

```python
to: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerVersionMigrationsTransferredClasses]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>]

---


### WorkerVersionModulesList <a name="WorkerVersionModulesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionModulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkerVersionModulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkerVersionModules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>]]

---


### WorkerVersionModulesOutputReference <a name="WorkerVersionModulesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionModulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentSha256">content_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFileInput">content_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFile">content_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_sha256`<sup>Required</sup> <a name="content_sha256" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentSha256"></a>

```python
content_sha256: str
```

- *Type:* str

---

##### `content_file_input`<sup>Optional</sup> <a name="content_file_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFileInput"></a>

```python
content_file_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `content_file`<sup>Required</sup> <a name="content_file" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFile"></a>

```python
content_file: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerVersionModules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>]

---


### WorkerVersionPlacementOutputReference <a name="WorkerVersionPlacementOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import worker_version

workerVersion.WorkerVersionPlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkerVersionPlacement]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>]

---



