# `cloudflare_split_tunnel`

Refer to the Terraform Registory for docs: [`cloudflare_split_tunnel`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel).

# `splitTunnel` Submodule <a name="`splitTunnel` Submodule" id="@cdktf/provider-cloudflare.splitTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SplitTunnel <a name="SplitTunnel" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel cloudflare_split_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import split_tunnel

splitTunnel.SplitTunnel(
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
  mode: str,
  tunnels: typing.Union[IResolvable, typing.List[SplitTunnelTunnels]],
  id: str = None,
  policy_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.mode">mode</a></code> | <code>str</code> | The mode of the split tunnel policy. Available values: `include`, `exclude`. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.tunnels">tunnels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels">SplitTunnelTunnels</a>]]</code> | tunnels block. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel#id SplitTunnel#id}. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | The settings policy for which to configure this split tunnel policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel#account_id SplitTunnel#account_id}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.mode"></a>

- *Type:* str

The mode of the split tunnel policy. Available values: `include`, `exclude`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel#mode SplitTunnel#mode}

---

##### `tunnels`<sup>Required</sup> <a name="tunnels" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.tunnels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels">SplitTunnelTunnels</a>]]

tunnels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel#tunnels SplitTunnel#tunnels}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel#id SplitTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.Initializer.parameter.policyId"></a>

- *Type:* str

The settings policy for which to configure this split tunnel policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel#policy_id SplitTunnel#policy_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.putTunnels">put_tunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.resetPolicyId">reset_policy_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_tunnels` <a name="put_tunnels" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.putTunnels"></a>

```python
def put_tunnels(
  value: typing.Union[IResolvable, typing.List[SplitTunnelTunnels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.putTunnels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels">SplitTunnelTunnels</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import split_tunnel

splitTunnel.SplitTunnel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import split_tunnel

splitTunnel.SplitTunnel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import split_tunnel

splitTunnel.SplitTunnel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.tunnels">tunnels</a></code> | <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList">SplitTunnelTunnelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.tunnelsInput">tunnels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels">SplitTunnelTunnels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `tunnels`<sup>Required</sup> <a name="tunnels" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.tunnels"></a>

```python
tunnels: SplitTunnelTunnelsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList">SplitTunnelTunnelsList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `tunnels_input`<sup>Optional</sup> <a name="tunnels_input" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.tunnelsInput"></a>

```python
tunnels_input: typing.Union[IResolvable, typing.List[SplitTunnelTunnels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels">SplitTunnelTunnels</a>]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SplitTunnelConfig <a name="SplitTunnelConfig" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import split_tunnel

splitTunnel.SplitTunnelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  mode: str,
  tunnels: typing.Union[IResolvable, typing.List[SplitTunnelTunnels]],
  id: str = None,
  policy_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.mode">mode</a></code> | <code>str</code> | The mode of the split tunnel policy. Available values: `include`, `exclude`. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.tunnels">tunnels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels">SplitTunnelTunnels</a>]]</code> | tunnels block. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel#id SplitTunnel#id}. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.policyId">policy_id</a></code> | <code>str</code> | The settings policy for which to configure this split tunnel policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel#account_id SplitTunnel#account_id}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

The mode of the split tunnel policy. Available values: `include`, `exclude`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel#mode SplitTunnel#mode}

---

##### `tunnels`<sup>Required</sup> <a name="tunnels" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.tunnels"></a>

```python
tunnels: typing.Union[IResolvable, typing.List[SplitTunnelTunnels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels">SplitTunnelTunnels</a>]]

tunnels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel#tunnels SplitTunnel#tunnels}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel#id SplitTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

The settings policy for which to configure this split tunnel policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel#policy_id SplitTunnel#policy_id}

---

### SplitTunnelTunnels <a name="SplitTunnelTunnels" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import split_tunnel

splitTunnel.SplitTunnelTunnels(
  address: str = None,
  description: str = None,
  host: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels.property.address">address</a></code> | <code>str</code> | The address for the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels.property.description">description</a></code> | <code>str</code> | A description for the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels.property.host">host</a></code> | <code>str</code> | The domain name for the tunnel. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels.property.address"></a>

```python
address: str
```

- *Type:* str

The address for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel#address SplitTunnel#address}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel#description SplitTunnel#description}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels.property.host"></a>

```python
host: str
```

- *Type:* str

The domain name for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/split_tunnel#host SplitTunnel#host}

---

## Classes <a name="Classes" id="Classes"></a>

### SplitTunnelTunnelsList <a name="SplitTunnelTunnelsList" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import split_tunnel

splitTunnel.SplitTunnelTunnelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SplitTunnelTunnelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels">SplitTunnelTunnels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SplitTunnelTunnels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels">SplitTunnelTunnels</a>]]

---


### SplitTunnelTunnelsOutputReference <a name="SplitTunnelTunnelsOutputReference" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import split_tunnel

splitTunnel.SplitTunnelTunnelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.resetHost">reset_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.resetHost"></a>

```python
def reset_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels">SplitTunnelTunnels</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SplitTunnelTunnels, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-cloudflare.splitTunnel.SplitTunnelTunnels">SplitTunnelTunnels</a>, cdktf.IResolvable]

---



