# `dataCloudflareEmailRoutingAddress` Submodule <a name="`dataCloudflareEmailRoutingAddress` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailRoutingAddress <a name="DataCloudflareEmailRoutingAddress" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_address cloudflare_email_routing_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_routing_address

dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress(
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
  destination_address_identifier: str = None,
  filter: DataCloudflareEmailRoutingAddressFilter = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.destinationAddressIdentifier">destination_address_identifier</a></code> | <code>str</code> | Destination address identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter">DataCloudflareEmailRoutingAddressFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_address#filter DataCloudflareEmailRoutingAddress#filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_address#account_id DataCloudflareEmailRoutingAddress#account_id}

---

##### `destination_address_identifier`<sup>Optional</sup> <a name="destination_address_identifier" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.destinationAddressIdentifier"></a>

- *Type:* str

Destination address identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_address#destination_address_identifier DataCloudflareEmailRoutingAddress#destination_address_identifier}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter">DataCloudflareEmailRoutingAddressFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_address#filter DataCloudflareEmailRoutingAddress#filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.resetDestinationAddressIdentifier">reset_destination_address_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.putFilter"></a>

```python
def put_filter(
  direction: str = None,
  verified: bool | IResolvable = None
) -> None
```

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.putFilter.parameter.direction"></a>

- *Type:* str

Sorts results in an ascending or descending order. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_address#direction DataCloudflareEmailRoutingAddress#direction}

---

###### `verified`<sup>Optional</sup> <a name="verified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.putFilter.parameter.verified"></a>

- *Type:* bool | cdktf.IResolvable

Filter by verified destination addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_address#verified DataCloudflareEmailRoutingAddress#verified}

---

##### `reset_destination_address_identifier` <a name="reset_destination_address_identifier" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.resetDestinationAddressIdentifier"></a>

```python
def reset_destination_address_identifier() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.resetFilter"></a>

```python
def reset_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareEmailRoutingAddress resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_routing_address

dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_routing_address

dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_routing_address

dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_routing_address

dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareEmailRoutingAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareEmailRoutingAddress to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareEmailRoutingAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailRoutingAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference">DataCloudflareEmailRoutingAddressFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.verified">verified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.destinationAddressIdentifierInput">destination_address_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.filterInput">filter_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter">DataCloudflareEmailRoutingAddressFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.destinationAddressIdentifier">destination_address_identifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.filter"></a>

```python
filter: DataCloudflareEmailRoutingAddressFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference">DataCloudflareEmailRoutingAddressFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.verified"></a>

```python
verified: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `destination_address_identifier_input`<sup>Optional</sup> <a name="destination_address_identifier_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.destinationAddressIdentifierInput"></a>

```python
destination_address_identifier_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareEmailRoutingAddressFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter">DataCloudflareEmailRoutingAddressFilter</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `destination_address_identifier`<sup>Required</sup> <a name="destination_address_identifier" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.destinationAddressIdentifier"></a>

```python
destination_address_identifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailRoutingAddressConfig <a name="DataCloudflareEmailRoutingAddressConfig" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_routing_address

dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  destination_address_identifier: str = None,
  filter: DataCloudflareEmailRoutingAddressFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.destinationAddressIdentifier">destination_address_identifier</a></code> | <code>str</code> | Destination address identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter">DataCloudflareEmailRoutingAddressFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_address#filter DataCloudflareEmailRoutingAddress#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_address#account_id DataCloudflareEmailRoutingAddress#account_id}

---

##### `destination_address_identifier`<sup>Optional</sup> <a name="destination_address_identifier" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.destinationAddressIdentifier"></a>

```python
destination_address_identifier: str
```

- *Type:* str

Destination address identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_address#destination_address_identifier DataCloudflareEmailRoutingAddress#destination_address_identifier}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.filter"></a>

```python
filter: DataCloudflareEmailRoutingAddressFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter">DataCloudflareEmailRoutingAddressFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_address#filter DataCloudflareEmailRoutingAddress#filter}.

---

### DataCloudflareEmailRoutingAddressFilter <a name="DataCloudflareEmailRoutingAddressFilter" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_routing_address

dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter(
  direction: str = None,
  verified: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter.property.direction">direction</a></code> | <code>str</code> | Sorts results in an ascending or descending order. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter.property.verified">verified</a></code> | <code>bool \| cdktf.IResolvable</code> | Filter by verified destination addresses. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter.property.direction"></a>

```python
direction: str
```

- *Type:* str

Sorts results in an ascending or descending order. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_address#direction DataCloudflareEmailRoutingAddress#direction}

---

##### `verified`<sup>Optional</sup> <a name="verified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter.property.verified"></a>

```python
verified: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Filter by verified destination addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_address#verified DataCloudflareEmailRoutingAddress#verified}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailRoutingAddressFilterOutputReference <a name="DataCloudflareEmailRoutingAddressFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_email_routing_address

dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.resetVerified">reset_verified</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_verified` <a name="reset_verified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.resetVerified"></a>

```python
def reset_verified() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.verifiedInput">verified_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.verified">verified</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter">DataCloudflareEmailRoutingAddressFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `verified_input`<sup>Optional</sup> <a name="verified_input" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.verifiedInput"></a>

```python
verified_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.verified"></a>

```python
verified: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareEmailRoutingAddressFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter">DataCloudflareEmailRoutingAddressFilter</a>

---



