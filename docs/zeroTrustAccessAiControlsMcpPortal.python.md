# `zeroTrustAccessAiControlsMcpPortal` Submodule <a name="`zeroTrustAccessAiControlsMcpPortal` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessAiControlsMcpPortal <a name="ZeroTrustAccessAiControlsMcpPortal" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_ai_controls_mcp_portal

zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal(
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
  hostname: str,
  id: str,
  name: str,
  description: str = None,
  servers: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServers] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#account_id ZeroTrustAccessAiControlsMcpPortal#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#hostname ZeroTrustAccessAiControlsMcpPortal#hostname}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.id">id</a></code> | <code>str</code> | portal id. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.servers">servers</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#servers ZeroTrustAccessAiControlsMcpPortal#servers}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#account_id ZeroTrustAccessAiControlsMcpPortal#account_id}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#hostname ZeroTrustAccessAiControlsMcpPortal#hostname}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.id"></a>

- *Type:* str

portal id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#id ZeroTrustAccessAiControlsMcpPortal#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}.

---

##### `servers`<sup>Optional</sup> <a name="servers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.servers"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#servers ZeroTrustAccessAiControlsMcpPortal#servers}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.putServers">put_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetServers">reset_servers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_servers` <a name="put_servers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.putServers"></a>

```python
def put_servers(
  value: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.putServers.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_servers` <a name="reset_servers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetServers"></a>

```python
def reset_servers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpPortal resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_ai_controls_mcp_portal

zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_ai_controls_mcp_portal

zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_ai_controls_mcp_portal

zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_ai_controls_mcp_portal

zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpPortal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustAccessAiControlsMcpPortal to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustAccessAiControlsMcpPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessAiControlsMcpPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.servers">servers</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList">ZeroTrustAccessAiControlsMcpPortalServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.serversInput">servers_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.servers"></a>

```python
servers: ZeroTrustAccessAiControlsMcpPortalServersList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList">ZeroTrustAccessAiControlsMcpPortalServersList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `servers_input`<sup>Optional</sup> <a name="servers_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.serversInput"></a>

```python
servers_input: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServers]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessAiControlsMcpPortalConfig <a name="ZeroTrustAccessAiControlsMcpPortalConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_ai_controls_mcp_portal

zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  hostname: str,
  id: str,
  name: str,
  description: str = None,
  servers: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServers] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#account_id ZeroTrustAccessAiControlsMcpPortal#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#hostname ZeroTrustAccessAiControlsMcpPortal#hostname}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.id">id</a></code> | <code>str</code> | portal id. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.servers">servers</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#servers ZeroTrustAccessAiControlsMcpPortal#servers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#account_id ZeroTrustAccessAiControlsMcpPortal#account_id}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#hostname ZeroTrustAccessAiControlsMcpPortal#hostname}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.id"></a>

```python
id: str
```

- *Type:* str

portal id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#id ZeroTrustAccessAiControlsMcpPortal#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}.

---

##### `servers`<sup>Optional</sup> <a name="servers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.servers"></a>

```python
servers: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServers]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#servers ZeroTrustAccessAiControlsMcpPortal#servers}.

---

### ZeroTrustAccessAiControlsMcpPortalServers <a name="ZeroTrustAccessAiControlsMcpPortalServers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_ai_controls_mcp_portal

zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers(
  server_id: str,
  default_disabled: bool | IResolvable = None,
  on_behalf: bool | IResolvable = None,
  updated_prompts: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts] = None,
  updated_tools: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.serverId">server_id</a></code> | <code>str</code> | server id. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.defaultDisabled">default_disabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#default_disabled ZeroTrustAccessAiControlsMcpPortal#default_disabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.onBehalf">on_behalf</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#on_behalf ZeroTrustAccessAiControlsMcpPortal#on_behalf}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.updatedPrompts">updated_prompts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_prompts ZeroTrustAccessAiControlsMcpPortal#updated_prompts}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.updatedTools">updated_tools</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_tools ZeroTrustAccessAiControlsMcpPortal#updated_tools}. |

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

server id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#server_id ZeroTrustAccessAiControlsMcpPortal#server_id}

---

##### `default_disabled`<sup>Optional</sup> <a name="default_disabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.defaultDisabled"></a>

```python
default_disabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#default_disabled ZeroTrustAccessAiControlsMcpPortal#default_disabled}.

---

##### `on_behalf`<sup>Optional</sup> <a name="on_behalf" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.onBehalf"></a>

```python
on_behalf: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#on_behalf ZeroTrustAccessAiControlsMcpPortal#on_behalf}.

---

##### `updated_prompts`<sup>Optional</sup> <a name="updated_prompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.updatedPrompts"></a>

```python
updated_prompts: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_prompts ZeroTrustAccessAiControlsMcpPortal#updated_prompts}.

---

##### `updated_tools`<sup>Optional</sup> <a name="updated_tools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.updatedTools"></a>

```python
updated_tools: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_tools ZeroTrustAccessAiControlsMcpPortal#updated_tools}.

---

### ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_ai_controls_mcp_portal

zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts(
  name: str,
  description: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}.

---

### ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_ai_controls_mcp_portal

zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools(
  name: str,
  description: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessAiControlsMcpPortalServersList <a name="ZeroTrustAccessAiControlsMcpPortalServersList" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_ai_controls_mcp_portal

zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessAiControlsMcpPortalServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServers]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>]

---


### ZeroTrustAccessAiControlsMcpPortalServersOutputReference <a name="ZeroTrustAccessAiControlsMcpPortalServersOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_ai_controls_mcp_portal

zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedPrompts">put_updated_prompts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedTools">put_updated_tools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetDefaultDisabled">reset_default_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetOnBehalf">reset_on_behalf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetUpdatedPrompts">reset_updated_prompts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetUpdatedTools">reset_updated_tools</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_updated_prompts` <a name="put_updated_prompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedPrompts"></a>

```python
def put_updated_prompts(
  value: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedPrompts.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>]

---

##### `put_updated_tools` <a name="put_updated_tools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedTools"></a>

```python
def put_updated_tools(
  value: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedTools.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>]

---

##### `reset_default_disabled` <a name="reset_default_disabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetDefaultDisabled"></a>

```python
def reset_default_disabled() -> None
```

##### `reset_on_behalf` <a name="reset_on_behalf" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetOnBehalf"></a>

```python
def reset_on_behalf() -> None
```

##### `reset_updated_prompts` <a name="reset_updated_prompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetUpdatedPrompts"></a>

```python
def reset_updated_prompts() -> None
```

##### `reset_updated_tools` <a name="reset_updated_tools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetUpdatedTools"></a>

```python
def reset_updated_tools() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedPrompts">updated_prompts</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedTools">updated_tools</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList">ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.defaultDisabledInput">default_disabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.onBehalfInput">on_behalf_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedPromptsInput">updated_prompts_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedToolsInput">updated_tools_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.defaultDisabled">default_disabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.onBehalf">on_behalf</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `updated_prompts`<sup>Required</sup> <a name="updated_prompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedPrompts"></a>

```python
updated_prompts: ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList</a>

---

##### `updated_tools`<sup>Required</sup> <a name="updated_tools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedTools"></a>

```python
updated_tools: ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList">ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList</a>

---

##### `default_disabled_input`<sup>Optional</sup> <a name="default_disabled_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.defaultDisabledInput"></a>

```python
default_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `on_behalf_input`<sup>Optional</sup> <a name="on_behalf_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.onBehalfInput"></a>

```python
on_behalf_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `updated_prompts_input`<sup>Optional</sup> <a name="updated_prompts_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedPromptsInput"></a>

```python
updated_prompts_input: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>]

---

##### `updated_tools_input`<sup>Optional</sup> <a name="updated_tools_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedToolsInput"></a>

```python
updated_tools_input: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>]

---

##### `default_disabled`<sup>Required</sup> <a name="default_disabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.defaultDisabled"></a>

```python
default_disabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `on_behalf`<sup>Required</sup> <a name="on_behalf" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.onBehalf"></a>

```python
on_behalf: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustAccessAiControlsMcpPortalServers
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>

---


### ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_ai_controls_mcp_portal

zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>]

---


### ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_ai_controls_mcp_portal

zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>

---


### ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_ai_controls_mcp_portal

zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>]

---


### ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_ai_controls_mcp_portal

zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>

---



