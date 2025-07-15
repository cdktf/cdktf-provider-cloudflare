# `dataCloudflareMagicWanIpsecTunnel` Submodule <a name="`dataCloudflareMagicWanIpsecTunnel` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicWanIpsecTunnel <a name="DataCloudflareMagicWanIpsecTunnel" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_ipsec_tunnel

dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel(
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
  ipsec_tunnel_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.ipsecTunnelId">ipsec_tunnel_id</a></code> | <code>str</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_wan_ipsec_tunnel#account_id DataCloudflareMagicWanIpsecTunnel#account_id}

---

##### `ipsec_tunnel_id`<sup>Required</sup> <a name="ipsec_tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.Initializer.parameter.ipsecTunnelId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_wan_ipsec_tunnel#ipsec_tunnel_id DataCloudflareMagicWanIpsecTunnel#ipsec_tunnel_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareMagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_ipsec_tunnel

dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_ipsec_tunnel

dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_ipsec_tunnel

dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_ipsec_tunnel

dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareMagicWanIpsecTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareMagicWanIpsecTunnel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareMagicWanIpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicWanIpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.ipsecTunnel">ipsec_tunnel</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.ipsecTunnelIdInput">ipsec_tunnel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.ipsecTunnelId">ipsec_tunnel_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ipsec_tunnel`<sup>Required</sup> <a name="ipsec_tunnel" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.ipsecTunnel"></a>

```python
ipsec_tunnel: DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `ipsec_tunnel_id_input`<sup>Optional</sup> <a name="ipsec_tunnel_id_input" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.ipsecTunnelIdInput"></a>

```python
ipsec_tunnel_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `ipsec_tunnel_id`<sup>Required</sup> <a name="ipsec_tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.ipsecTunnelId"></a>

```python
ipsec_tunnel_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicWanIpsecTunnelConfig <a name="DataCloudflareMagicWanIpsecTunnelConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_ipsec_tunnel

dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  ipsec_tunnel_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.ipsecTunnelId">ipsec_tunnel_id</a></code> | <code>str</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_wan_ipsec_tunnel#account_id DataCloudflareMagicWanIpsecTunnel#account_id}

---

##### `ipsec_tunnel_id`<sup>Required</sup> <a name="ipsec_tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelConfig.property.ipsecTunnelId"></a>

```python
ipsec_tunnel_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_wan_ipsec_tunnel#ipsec_tunnel_id DataCloudflareMagicWanIpsecTunnel#ipsec_tunnel_id}

---

### DataCloudflareMagicWanIpsecTunnelIpsecTunnel <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnel" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnel.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_ipsec_tunnel

dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnel()
```


### DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_ipsec_tunnel

dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck()
```


### DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_ipsec_tunnel

dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget()
```


### DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_ipsec_tunnel

dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_ipsec_tunnel

dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.rate">rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.rate"></a>

```python
rate: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.target"></a>

```python
target: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheck</a>

---


### DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_ipsec_tunnel

dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.effective">effective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.saved">saved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.effective"></a>

```python
effective: str
```

- *Type:* str

---

##### `saved`<sup>Required</sup> <a name="saved" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.saved"></a>

```python
saved: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckTarget</a>

---


### DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_ipsec_tunnel

dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.allowNullCipher">allow_null_cipher</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.cloudflareEndpoint">cloudflare_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.customerEndpoint">customer_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.interfaceAddress">interface_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.pskMetadata">psk_metadata</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.replayProtection">replay_protection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnel">DataCloudflareMagicWanIpsecTunnelIpsecTunnel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_null_cipher`<sup>Required</sup> <a name="allow_null_cipher" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.allowNullCipher"></a>

```python
allow_null_cipher: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `cloudflare_endpoint`<sup>Required</sup> <a name="cloudflare_endpoint" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.cloudflareEndpoint"></a>

```python
cloudflare_endpoint: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `customer_endpoint`<sup>Required</sup> <a name="customer_endpoint" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.customerEndpoint"></a>

```python
customer_endpoint: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.healthCheck"></a>

```python
health_check: DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelHealthCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.interfaceAddress"></a>

```python
interface_address: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `psk_metadata`<sup>Required</sup> <a name="psk_metadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.pskMetadata"></a>

```python
psk_metadata: DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference">DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference</a>

---

##### `replay_protection`<sup>Required</sup> <a name="replay_protection" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.replayProtection"></a>

```python
replay_protection: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicWanIpsecTunnelIpsecTunnel
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnel">DataCloudflareMagicWanIpsecTunnelIpsecTunnel</a>

---


### DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference <a name="DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_ipsec_tunnel

dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn">last_generated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata">DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_generated_on`<sup>Required</sup> <a name="last_generated_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn"></a>

```python
last_generated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanIpsecTunnel.DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata">DataCloudflareMagicWanIpsecTunnelIpsecTunnelPskMetadata</a>

---



