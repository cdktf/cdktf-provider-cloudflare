# `dataCloudflareMagicWanGreTunnel` Submodule <a name="`dataCloudflareMagicWanGreTunnel` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicWanGreTunnel <a name="DataCloudflareMagicWanGreTunnel" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel(
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
  gre_tunnel_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.greTunnelId">gre_tunnel_id</a></code> | <code>str</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_wan_gre_tunnel#account_id DataCloudflareMagicWanGreTunnel#account_id}

---

##### `gre_tunnel_id`<sup>Required</sup> <a name="gre_tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.Initializer.parameter.greTunnelId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_wan_gre_tunnel#gre_tunnel_id DataCloudflareMagicWanGreTunnel#gre_tunnel_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareMagicWanGreTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareMagicWanGreTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareMagicWanGreTunnel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareMagicWanGreTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_wan_gre_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicWanGreTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.greTunnel">gre_tunnel</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference">DataCloudflareMagicWanGreTunnelGreTunnelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.greTunnelIdInput">gre_tunnel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.greTunnelId">gre_tunnel_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `gre_tunnel`<sup>Required</sup> <a name="gre_tunnel" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.greTunnel"></a>

```python
gre_tunnel: DataCloudflareMagicWanGreTunnelGreTunnelOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference">DataCloudflareMagicWanGreTunnelGreTunnelOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `gre_tunnel_id_input`<sup>Optional</sup> <a name="gre_tunnel_id_input" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.greTunnelIdInput"></a>

```python
gre_tunnel_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `gre_tunnel_id`<sup>Required</sup> <a name="gre_tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.greTunnelId"></a>

```python
gre_tunnel_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicWanGreTunnelConfig <a name="DataCloudflareMagicWanGreTunnelConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  gre_tunnel_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.greTunnelId">gre_tunnel_id</a></code> | <code>str</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_wan_gre_tunnel#account_id DataCloudflareMagicWanGreTunnel#account_id}

---

##### `gre_tunnel_id`<sup>Required</sup> <a name="gre_tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelConfig.property.greTunnelId"></a>

```python
gre_tunnel_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_wan_gre_tunnel#gre_tunnel_id DataCloudflareMagicWanGreTunnel#gre_tunnel_id}

---

### DataCloudflareMagicWanGreTunnelGreTunnel <a name="DataCloudflareMagicWanGreTunnelGreTunnel" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnel.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnel()
```


### DataCloudflareMagicWanGreTunnelGreTunnelBgp <a name="DataCloudflareMagicWanGreTunnelGreTunnelBgp" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgp.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgp()
```


### DataCloudflareMagicWanGreTunnelGreTunnelBgpStatus <a name="DataCloudflareMagicWanGreTunnelGreTunnelBgpStatus" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatus()
```


### DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck <a name="DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck()
```


### DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget <a name="DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference <a name="DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.property.customerAsn">customer_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.property.extraPrefixes">extra_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.property.md5Key">md5_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgp">DataCloudflareMagicWanGreTunnelGreTunnelBgp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_asn`<sup>Required</sup> <a name="customer_asn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.property.customerAsn"></a>

```python
customer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extra_prefixes`<sup>Required</sup> <a name="extra_prefixes" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.property.extraPrefixes"></a>

```python
extra_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `md5_key`<sup>Required</sup> <a name="md5_key" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.property.md5Key"></a>

```python
md5_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicWanGreTunnelGreTunnelBgp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgp">DataCloudflareMagicWanGreTunnelGreTunnelBgp</a>

---


### DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference <a name="DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.bgpState">bgp_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.cfSpeakerIp">cf_speaker_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.cfSpeakerPort">cf_speaker_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.customerSpeakerIp">customer_speaker_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.customerSpeakerPort">customer_speaker_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.tcpEstablished">tcp_established</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatus">DataCloudflareMagicWanGreTunnelGreTunnelBgpStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bgp_state`<sup>Required</sup> <a name="bgp_state" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.bgpState"></a>

```python
bgp_state: str
```

- *Type:* str

---

##### `cf_speaker_ip`<sup>Required</sup> <a name="cf_speaker_ip" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.cfSpeakerIp"></a>

```python
cf_speaker_ip: str
```

- *Type:* str

---

##### `cf_speaker_port`<sup>Required</sup> <a name="cf_speaker_port" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.cfSpeakerPort"></a>

```python
cf_speaker_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_speaker_ip`<sup>Required</sup> <a name="customer_speaker_ip" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.customerSpeakerIp"></a>

```python
customer_speaker_ip: str
```

- *Type:* str

---

##### `customer_speaker_port`<sup>Required</sup> <a name="customer_speaker_port" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.customerSpeakerPort"></a>

```python
customer_speaker_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tcp_established`<sup>Required</sup> <a name="tcp_established" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.tcpEstablished"></a>

```python
tcp_established: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicWanGreTunnelGreTunnelBgpStatus
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatus">DataCloudflareMagicWanGreTunnelGreTunnelBgpStatus</a>

---


### DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference <a name="DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.rate">rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference">DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck">DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.rate"></a>

```python
rate: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.target"></a>

```python
target: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference">DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck">DataCloudflareMagicWanGreTunnelGreTunnelHealthCheck</a>

---


### DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference <a name="DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.effective">effective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.saved">saved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget">DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.effective"></a>

```python
effective: str
```

- *Type:* str

---

##### `saved`<sup>Required</sup> <a name="saved" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.saved"></a>

```python
saved: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget">DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckTarget</a>

---


### DataCloudflareMagicWanGreTunnelGreTunnelOutputReference <a name="DataCloudflareMagicWanGreTunnelGreTunnelOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_gre_tunnel

dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.automaticReturnRouting">automatic_return_routing</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference">DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.bgpStatus">bgp_status</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference">DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.cloudflareGreEndpoint">cloudflare_gre_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.customerGreEndpoint">customer_gre_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference">DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.interfaceAddress">interface_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.interfaceAddress6">interface_address6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.mtu">mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnel">DataCloudflareMagicWanGreTunnelGreTunnel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic_return_routing`<sup>Required</sup> <a name="automatic_return_routing" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.automaticReturnRouting"></a>

```python
automatic_return_routing: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `bgp`<sup>Required</sup> <a name="bgp" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.bgp"></a>

```python
bgp: DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference">DataCloudflareMagicWanGreTunnelGreTunnelBgpOutputReference</a>

---

##### `bgp_status`<sup>Required</sup> <a name="bgp_status" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.bgpStatus"></a>

```python
bgp_status: DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference">DataCloudflareMagicWanGreTunnelGreTunnelBgpStatusOutputReference</a>

---

##### `cloudflare_gre_endpoint`<sup>Required</sup> <a name="cloudflare_gre_endpoint" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.cloudflareGreEndpoint"></a>

```python
cloudflare_gre_endpoint: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `customer_gre_endpoint`<sup>Required</sup> <a name="customer_gre_endpoint" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.customerGreEndpoint"></a>

```python
customer_gre_endpoint: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.healthCheck"></a>

```python
health_check: DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference">DataCloudflareMagicWanGreTunnelGreTunnelHealthCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.interfaceAddress"></a>

```python
interface_address: str
```

- *Type:* str

---

##### `interface_address6`<sup>Required</sup> <a name="interface_address6" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.interfaceAddress6"></a>

```python
interface_address6: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.mtu"></a>

```python
mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnelOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicWanGreTunnelGreTunnel
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanGreTunnel.DataCloudflareMagicWanGreTunnelGreTunnel">DataCloudflareMagicWanGreTunnelGreTunnel</a>

---



