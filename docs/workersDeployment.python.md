# `workersDeployment` Submodule <a name="`workersDeployment` Submodule" id="@cdktf/provider-cloudflare.workersDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkersDeployment <a name="WorkersDeployment" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment cloudflare_workers_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_deployment

workersDeployment.WorkersDeployment(
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
  script_name: str,
  strategy: str,
  versions: typing.Union[IResolvable, typing.List[WorkersDeploymentVersions]],
  annotations: WorkersDeploymentAnnotations = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.scriptName">script_name</a></code> | <code>str</code> | Name of the script, used in URLs and route configuration. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.strategy">strategy</a></code> | <code>str</code> | Available values: "percentage". |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.versions">versions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions">WorkersDeploymentVersions</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#versions WorkersDeployment#versions}. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.annotations">annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotations">WorkersDeploymentAnnotations</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#annotations WorkersDeployment#annotations}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#account_id WorkersDeployment#account_id}

---

##### `script_name`<sup>Required</sup> <a name="script_name" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.scriptName"></a>

- *Type:* str

Name of the script, used in URLs and route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#script_name WorkersDeployment#script_name}

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.strategy"></a>

- *Type:* str

Available values: "percentage".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#strategy WorkersDeployment#strategy}

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.versions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions">WorkersDeploymentVersions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#versions WorkersDeployment#versions}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.Initializer.parameter.annotations"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotations">WorkersDeploymentAnnotations</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#annotations WorkersDeployment#annotations}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.putAnnotations">put_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.putVersions">put_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.resetAnnotations">reset_annotations</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_annotations` <a name="put_annotations" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.putAnnotations"></a>

```python
def put_annotations(
  workers_message: str = None
) -> None
```

###### `workers_message`<sup>Optional</sup> <a name="workers_message" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.putAnnotations.parameter.workersMessage"></a>

- *Type:* str

Human-readable message about the deployment. Truncated to 100 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#workers_message WorkersDeployment#workers_message}

---

##### `put_versions` <a name="put_versions" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.putVersions"></a>

```python
def put_versions(
  value: typing.Union[IResolvable, typing.List[WorkersDeploymentVersions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.putVersions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions">WorkersDeploymentVersions</a>]]

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WorkersDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_deployment

workersDeployment.WorkersDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_deployment

workersDeployment.WorkersDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_deployment

workersDeployment.WorkersDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_deployment

workersDeployment.WorkersDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WorkersDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkersDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkersDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkersDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.annotations">annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference">WorkersDeploymentAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.authorEmail">author_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList">WorkersDeploymentVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.annotationsInput">annotations_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotations">WorkersDeploymentAnnotations</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.scriptNameInput">script_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.strategyInput">strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.versionsInput">versions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions">WorkersDeploymentVersions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.scriptName">script_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.annotations"></a>

```python
annotations: WorkersDeploymentAnnotationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference">WorkersDeploymentAnnotationsOutputReference</a>

---

##### `author_email`<sup>Required</sup> <a name="author_email" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.authorEmail"></a>

```python
author_email: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.versions"></a>

```python
versions: WorkersDeploymentVersionsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList">WorkersDeploymentVersionsList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.annotationsInput"></a>

```python
annotations_input: typing.Union[IResolvable, WorkersDeploymentAnnotations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotations">WorkersDeploymentAnnotations</a>]

---

##### `script_name_input`<sup>Optional</sup> <a name="script_name_input" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.scriptNameInput"></a>

```python
script_name_input: str
```

- *Type:* str

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.strategyInput"></a>

```python
strategy_input: str
```

- *Type:* str

---

##### `versions_input`<sup>Optional</sup> <a name="versions_input" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.versionsInput"></a>

```python
versions_input: typing.Union[IResolvable, typing.List[WorkersDeploymentVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions">WorkersDeploymentVersions</a>]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `script_name`<sup>Required</sup> <a name="script_name" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.scriptName"></a>

```python
script_name: str
```

- *Type:* str

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkersDeploymentAnnotations <a name="WorkersDeploymentAnnotations" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotations.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_deployment

workersDeployment.WorkersDeploymentAnnotations(
  workers_message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotations.property.workersMessage">workers_message</a></code> | <code>str</code> | Human-readable message about the deployment. Truncated to 100 bytes. |

---

##### `workers_message`<sup>Optional</sup> <a name="workers_message" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotations.property.workersMessage"></a>

```python
workers_message: str
```

- *Type:* str

Human-readable message about the deployment. Truncated to 100 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#workers_message WorkersDeployment#workers_message}

---

### WorkersDeploymentConfig <a name="WorkersDeploymentConfig" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_deployment

workersDeployment.WorkersDeploymentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  script_name: str,
  strategy: str,
  versions: typing.Union[IResolvable, typing.List[WorkersDeploymentVersions]],
  annotations: WorkersDeploymentAnnotations = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.scriptName">script_name</a></code> | <code>str</code> | Name of the script, used in URLs and route configuration. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.strategy">strategy</a></code> | <code>str</code> | Available values: "percentage". |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.versions">versions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions">WorkersDeploymentVersions</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#versions WorkersDeployment#versions}. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.annotations">annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotations">WorkersDeploymentAnnotations</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#annotations WorkersDeployment#annotations}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#account_id WorkersDeployment#account_id}

---

##### `script_name`<sup>Required</sup> <a name="script_name" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.scriptName"></a>

```python
script_name: str
```

- *Type:* str

Name of the script, used in URLs and route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#script_name WorkersDeployment#script_name}

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

Available values: "percentage".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#strategy WorkersDeployment#strategy}

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.versions"></a>

```python
versions: typing.Union[IResolvable, typing.List[WorkersDeploymentVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions">WorkersDeploymentVersions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#versions WorkersDeployment#versions}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentConfig.property.annotations"></a>

```python
annotations: WorkersDeploymentAnnotations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotations">WorkersDeploymentAnnotations</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#annotations WorkersDeployment#annotations}.

---

### WorkersDeploymentVersions <a name="WorkersDeploymentVersions" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_deployment

workersDeployment.WorkersDeploymentVersions(
  percentage: typing.Union[int, float],
  version_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#percentage WorkersDeployment#percentage}. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions.property.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#version_id WorkersDeployment#version_id}. |

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#percentage WorkersDeployment#percentage}.

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/workers_deployment#version_id WorkersDeployment#version_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkersDeploymentAnnotationsOutputReference <a name="WorkersDeploymentAnnotationsOutputReference" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_deployment

workersDeployment.WorkersDeploymentAnnotationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.resetWorkersMessage">reset_workers_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workers_message` <a name="reset_workers_message" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.resetWorkersMessage"></a>

```python
def reset_workers_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.property.workersTriggeredBy">workers_triggered_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.property.workersMessageInput">workers_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.property.workersMessage">workers_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotations">WorkersDeploymentAnnotations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workers_triggered_by`<sup>Required</sup> <a name="workers_triggered_by" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.property.workersTriggeredBy"></a>

```python
workers_triggered_by: str
```

- *Type:* str

---

##### `workers_message_input`<sup>Optional</sup> <a name="workers_message_input" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.property.workersMessageInput"></a>

```python
workers_message_input: str
```

- *Type:* str

---

##### `workers_message`<sup>Required</sup> <a name="workers_message" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.property.workersMessage"></a>

```python
workers_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkersDeploymentAnnotations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentAnnotations">WorkersDeploymentAnnotations</a>]

---


### WorkersDeploymentVersionsList <a name="WorkersDeploymentVersionsList" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_deployment

workersDeployment.WorkersDeploymentVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkersDeploymentVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions">WorkersDeploymentVersions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkersDeploymentVersions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions">WorkersDeploymentVersions</a>]]

---


### WorkersDeploymentVersionsOutputReference <a name="WorkersDeploymentVersionsOutputReference" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import workers_deployment

workersDeployment.WorkersDeploymentVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.property.percentageInput">percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions">WorkersDeploymentVersions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `percentage_input`<sup>Optional</sup> <a name="percentage_input" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.property.percentageInput"></a>

```python
percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkersDeploymentVersions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.workersDeployment.WorkersDeploymentVersions">WorkersDeploymentVersions</a>]

---



