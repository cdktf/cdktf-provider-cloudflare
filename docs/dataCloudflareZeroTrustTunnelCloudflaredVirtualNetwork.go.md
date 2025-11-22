# `dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork` Submodule <a name="`dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network cloudflare_zero_trust_tunnel_cloudflared_virtual_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrusttunnelcloudflaredvirtualnetwork"

datacloudflarezerotrusttunnelcloudflaredvirtualnetwork.NewDataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork(scope Construct, id *string, config DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig) DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.putFilter"></a>

```go
func PutFilter(value DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrusttunnelcloudflaredvirtualnetwork"

datacloudflarezerotrusttunnelcloudflaredvirtualnetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrusttunnelcloudflaredvirtualnetwork"

datacloudflarezerotrusttunnelcloudflaredvirtualnetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrusttunnelcloudflaredvirtualnetwork"

datacloudflarezerotrusttunnelcloudflaredvirtualnetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrusttunnelcloudflaredvirtualnetwork"

datacloudflarezerotrusttunnelcloudflaredvirtualnetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.deletedAt">DeletedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.isDefaultNetwork">IsDefaultNetwork</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.deletedAt"></a>

```go
func DeletedAt() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.filter"></a>

```go
func Filter() DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDefaultNetwork`<sup>Required</sup> <a name="IsDefaultNetwork" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.isDefaultNetwork"></a>

```go
func IsDefaultNetwork() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrusttunnelcloudflaredvirtualnetwork"

&datacloudflarezerotrusttunnelcloudflaredvirtualnetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#filter DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | UUID of the virtual network. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#account_id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.filter"></a>

```go
Filter DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#filter DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#filter}.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkConfig.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

UUID of the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#virtual_network_id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#virtual_network_id}

---

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrusttunnelcloudflaredvirtualnetwork"

&datacloudflarezerotrusttunnelcloudflaredvirtualnetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter {
	Id: *string,
	IsDefault: interface{},
	IsDefaultNetwork: interface{},
	IsDeleted: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.id">Id</a></code> | <code>*string</code> | UUID of the virtual network. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | If `true`, only include the default virtual network. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.isDefaultNetwork">IsDefaultNetwork</a></code> | <code>interface{}</code> | If `true`, only include the default virtual network. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.isDeleted">IsDeleted</a></code> | <code>interface{}</code> | If `true`, only include deleted virtual networks. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.name">Name</a></code> | <code>*string</code> | A user-friendly name for the virtual network. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.id"></a>

```go
Id *string
```

- *Type:* *string

UUID of the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDefault`<sup>Optional</sup> <a name="IsDefault" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.isDefault"></a>

```go
IsDefault interface{}
```

- *Type:* interface{}

If `true`, only include the default virtual network.

If `false`, exclude the default virtual network. If empty, all virtual networks will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#is_default DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#is_default}

---

##### `IsDefaultNetwork`<sup>Optional</sup> <a name="IsDefaultNetwork" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.isDefaultNetwork"></a>

```go
IsDefaultNetwork interface{}
```

- *Type:* interface{}

If `true`, only include the default virtual network.

If `false`, exclude the default virtual network. If empty, all virtual networks will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#is_default_network DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#is_default_network}

---

##### `IsDeleted`<sup>Optional</sup> <a name="IsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.isDeleted"></a>

```go
IsDeleted interface{}
```

- *Type:* interface{}

If `true`, only include deleted virtual networks.

If `false`, exclude deleted virtual networks. If empty, all virtual networks will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#is_deleted DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#is_deleted}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

A user-friendly name for the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_network#name DataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarezerotrusttunnelcloudflaredvirtualnetwork"

datacloudflarezerotrusttunnelcloudflaredvirtualnetwork.NewDataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetIsDefault">ResetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetIsDefaultNetwork">ResetIsDefaultNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetIsDeleted">ResetIsDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIsDefault` <a name="ResetIsDefault" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetIsDefault"></a>

```go
func ResetIsDefault()
```

##### `ResetIsDefaultNetwork` <a name="ResetIsDefaultNetwork" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetIsDefaultNetwork"></a>

```go
func ResetIsDefaultNetwork()
```

##### `ResetIsDeleted` <a name="ResetIsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetIsDeleted"></a>

```go
func ResetIsDeleted()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDefaultInput">IsDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDefaultNetworkInput">IsDefaultNetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDeletedInput">IsDeletedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDefaultNetwork">IsDefaultNetwork</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDeleted">IsDeleted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDefaultInput"></a>

```go
func IsDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `IsDefaultNetworkInput`<sup>Optional</sup> <a name="IsDefaultNetworkInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDefaultNetworkInput"></a>

```go
func IsDefaultNetworkInput() interface{}
```

- *Type:* interface{}

---

##### `IsDeletedInput`<sup>Optional</sup> <a name="IsDeletedInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDeletedInput"></a>

```go
func IsDeletedInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDefault"></a>

```go
func IsDefault() interface{}
```

- *Type:* interface{}

---

##### `IsDefaultNetwork`<sup>Required</sup> <a name="IsDefaultNetwork" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDefaultNetwork"></a>

```go
func IsDefaultNetwork() interface{}
```

- *Type:* interface{}

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.isDeleted"></a>

```go
func IsDeleted() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetwork.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworkFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



