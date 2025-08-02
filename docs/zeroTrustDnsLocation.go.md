# `zeroTrustDnsLocation` Submodule <a name="`zeroTrustDnsLocation` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDnsLocation <a name="ZeroTrustDnsLocation" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location cloudflare_zero_trust_dns_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.NewZeroTrustDnsLocation(scope Construct, id *string, config ZeroTrustDnsLocationConfig) ZeroTrustDnsLocation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig">ZeroTrustDnsLocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig">ZeroTrustDnsLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putEndpoints">PutEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetClientDefault">ResetClientDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetDnsDestinationIpsId">ResetDnsDestinationIpsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetEcsSupport">ResetEcsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetEndpoints">ResetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetNetworks">ResetNetworks</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoints` <a name="PutEndpoints" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putEndpoints"></a>

```go
func PutEndpoints(value ZeroTrustDnsLocationEndpoints)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putEndpoints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a>

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putNetworks"></a>

```go
func PutNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClientDefault` <a name="ResetClientDefault" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetClientDefault"></a>

```go
func ResetClientDefault()
```

##### `ResetDnsDestinationIpsId` <a name="ResetDnsDestinationIpsId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetDnsDestinationIpsId"></a>

```go
func ResetDnsDestinationIpsId()
```

##### `ResetEcsSupport` <a name="ResetEcsSupport" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetEcsSupport"></a>

```go
func ResetEcsSupport()
```

##### `ResetEndpoints` <a name="ResetEndpoints" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetEndpoints"></a>

```go
func ResetEndpoints()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetNetworks"></a>

```go
func ResetNetworks()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDnsLocation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.ZeroTrustDnsLocation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.ZeroTrustDnsLocation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.ZeroTrustDnsLocation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.ZeroTrustDnsLocation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZeroTrustDnsLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustDnsLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustDnsLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDnsLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpv6BlockId">DnsDestinationIpv6BlockId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dohSubdomain">DohSubdomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference">ZeroTrustDnsLocationEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ipv4Destination">Ipv4Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ipv4DestinationBackup">Ipv4DestinationBackup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList">ZeroTrustDnsLocationNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.clientDefaultInput">ClientDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpsIdInput">DnsDestinationIpsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ecsSupportInput">EcsSupportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.endpointsInput">EndpointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.networksInput">NetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.clientDefault">ClientDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpsId">DnsDestinationIpsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ecsSupport">EcsSupport</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DnsDestinationIpv6BlockId`<sup>Required</sup> <a name="DnsDestinationIpv6BlockId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpv6BlockId"></a>

```go
func DnsDestinationIpv6BlockId() *string
```

- *Type:* *string

---

##### `DohSubdomain`<sup>Required</sup> <a name="DohSubdomain" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dohSubdomain"></a>

```go
func DohSubdomain() *string
```

- *Type:* *string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.endpoints"></a>

```go
func Endpoints() ZeroTrustDnsLocationEndpointsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference">ZeroTrustDnsLocationEndpointsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Ipv4Destination`<sup>Required</sup> <a name="Ipv4Destination" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ipv4Destination"></a>

```go
func Ipv4Destination() *string
```

- *Type:* *string

---

##### `Ipv4DestinationBackup`<sup>Required</sup> <a name="Ipv4DestinationBackup" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ipv4DestinationBackup"></a>

```go
func Ipv4DestinationBackup() *string
```

- *Type:* *string

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.networks"></a>

```go
func Networks() ZeroTrustDnsLocationNetworksList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList">ZeroTrustDnsLocationNetworksList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ClientDefaultInput`<sup>Optional</sup> <a name="ClientDefaultInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.clientDefaultInput"></a>

```go
func ClientDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `DnsDestinationIpsIdInput`<sup>Optional</sup> <a name="DnsDestinationIpsIdInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpsIdInput"></a>

```go
func DnsDestinationIpsIdInput() *string
```

- *Type:* *string

---

##### `EcsSupportInput`<sup>Optional</sup> <a name="EcsSupportInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ecsSupportInput"></a>

```go
func EcsSupportInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.endpointsInput"></a>

```go
func EndpointsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.networksInput"></a>

```go
func NetworksInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ClientDefault`<sup>Required</sup> <a name="ClientDefault" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.clientDefault"></a>

```go
func ClientDefault() interface{}
```

- *Type:* interface{}

---

##### `DnsDestinationIpsId`<sup>Required</sup> <a name="DnsDestinationIpsId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpsId"></a>

```go
func DnsDestinationIpsId() *string
```

- *Type:* *string

---

##### `EcsSupport`<sup>Required</sup> <a name="EcsSupport" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ecsSupport"></a>

```go
func EcsSupport() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDnsLocationConfig <a name="ZeroTrustDnsLocationConfig" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

&zerotrustdnslocation.ZeroTrustDnsLocationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	ClientDefault: interface{},
	DnsDestinationIpsId: *string,
	EcsSupport: interface{},
	Endpoints: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints,
	Networks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#account_id ZeroTrustDnsLocation#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.clientDefault">ClientDefault</a></code> | <code>interface{}</code> | True if the location is the default location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.dnsDestinationIpsId">DnsDestinationIpsId</a></code> | <code>*string</code> | The identifier of the pair of IPv4 addresses assigned to this location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.ecsSupport">EcsSupport</a></code> | <code>interface{}</code> | True if the location needs to resolve EDNS queries. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a></code> | The destination endpoints configured for this location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.networks">Networks</a></code> | <code>interface{}</code> | A list of network ranges that requests from this location would originate from. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#account_id ZeroTrustDnsLocation#account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#name ZeroTrustDnsLocation#name}

---

##### `ClientDefault`<sup>Optional</sup> <a name="ClientDefault" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.clientDefault"></a>

```go
ClientDefault interface{}
```

- *Type:* interface{}

True if the location is the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#client_default ZeroTrustDnsLocation#client_default}

---

##### `DnsDestinationIpsId`<sup>Optional</sup> <a name="DnsDestinationIpsId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.dnsDestinationIpsId"></a>

```go
DnsDestinationIpsId *string
```

- *Type:* *string

The identifier of the pair of IPv4 addresses assigned to this location.

When creating a location, if this field is absent or set with null, the pair of shared IPv4 addresses (0e4a32c6-6fb8-4858-9296-98f51631e8e6) is auto-assigned. When updating a location, if the field is absent or set with null, the pre-assigned pair remains unchanged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#dns_destination_ips_id ZeroTrustDnsLocation#dns_destination_ips_id}

---

##### `EcsSupport`<sup>Optional</sup> <a name="EcsSupport" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.ecsSupport"></a>

```go
EcsSupport interface{}
```

- *Type:* interface{}

True if the location needs to resolve EDNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#ecs_support ZeroTrustDnsLocation#ecs_support}

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.endpoints"></a>

```go
Endpoints ZeroTrustDnsLocationEndpoints
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a>

The destination endpoints configured for this location.

When updating a location, if this field is absent or set with null, the endpoints configuration remains unchanged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#endpoints ZeroTrustDnsLocation#endpoints}

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

A list of network ranges that requests from this location would originate from.

A non-empty list is only effective if the ipv4 endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}

---

### ZeroTrustDnsLocationEndpoints <a name="ZeroTrustDnsLocationEndpoints" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

&zerotrustdnslocation.ZeroTrustDnsLocationEndpoints {
	Doh: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh,
	Dot: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot,
	Ipv4: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4,
	Ipv6: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.doh">Doh</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#doh ZeroTrustDnsLocation#doh}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.dot">Dot</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#dot ZeroTrustDnsLocation#dot}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#ipv4 ZeroTrustDnsLocation#ipv4}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#ipv6 ZeroTrustDnsLocation#ipv6}. |

---

##### `Doh`<sup>Required</sup> <a name="Doh" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.doh"></a>

```go
Doh ZeroTrustDnsLocationEndpointsDoh
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#doh ZeroTrustDnsLocation#doh}.

---

##### `Dot`<sup>Required</sup> <a name="Dot" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.dot"></a>

```go
Dot ZeroTrustDnsLocationEndpointsDot
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#dot ZeroTrustDnsLocation#dot}.

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.ipv4"></a>

```go
Ipv4 ZeroTrustDnsLocationEndpointsIpv4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#ipv4 ZeroTrustDnsLocation#ipv4}.

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.ipv6"></a>

```go
Ipv6 ZeroTrustDnsLocationEndpointsIpv6
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#ipv6 ZeroTrustDnsLocation#ipv6}.

---

### ZeroTrustDnsLocationEndpointsDoh <a name="ZeroTrustDnsLocationEndpointsDoh" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

&zerotrustdnslocation.ZeroTrustDnsLocationEndpointsDoh {
	Enabled: interface{},
	Networks: interface{},
	RequireToken: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.enabled">Enabled</a></code> | <code>interface{}</code> | True if the endpoint is enabled for this location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.networks">Networks</a></code> | <code>interface{}</code> | A list of allowed source IP network ranges for this endpoint. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.requireToken">RequireToken</a></code> | <code>interface{}</code> | True if the endpoint requires [user identity](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/agentless/dns/dns-over-https/#filter-doh-requests-by-user) authentication. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

True if the endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

A list of allowed source IP network ranges for this endpoint.

When empty, all source IPs are allowed. A non-empty list is only effective if the endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}

---

##### `RequireToken`<sup>Optional</sup> <a name="RequireToken" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.requireToken"></a>

```go
RequireToken interface{}
```

- *Type:* interface{}

True if the endpoint requires [user identity](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/agentless/dns/dns-over-https/#filter-doh-requests-by-user) authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#require_token ZeroTrustDnsLocation#require_token}

---

### ZeroTrustDnsLocationEndpointsDohNetworks <a name="ZeroTrustDnsLocationEndpointsDohNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

&zerotrustdnslocation.ZeroTrustDnsLocationEndpointsDohNetworks {
	Network: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks.property.network">Network</a></code> | <code>*string</code> | The IP address or IP CIDR. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks.property.network"></a>

```go
Network *string
```

- *Type:* *string

The IP address or IP CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}

---

### ZeroTrustDnsLocationEndpointsDot <a name="ZeroTrustDnsLocationEndpointsDot" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

&zerotrustdnslocation.ZeroTrustDnsLocationEndpointsDot {
	Enabled: interface{},
	Networks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot.property.enabled">Enabled</a></code> | <code>interface{}</code> | True if the endpoint is enabled for this location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot.property.networks">Networks</a></code> | <code>interface{}</code> | A list of allowed source IP network ranges for this endpoint. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

True if the endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

A list of allowed source IP network ranges for this endpoint.

When empty, all source IPs are allowed. A non-empty list is only effective if the endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}

---

### ZeroTrustDnsLocationEndpointsDotNetworks <a name="ZeroTrustDnsLocationEndpointsDotNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

&zerotrustdnslocation.ZeroTrustDnsLocationEndpointsDotNetworks {
	Network: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks.property.network">Network</a></code> | <code>*string</code> | The IP address or IP CIDR. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks.property.network"></a>

```go
Network *string
```

- *Type:* *string

The IP address or IP CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}

---

### ZeroTrustDnsLocationEndpointsIpv4 <a name="ZeroTrustDnsLocationEndpointsIpv4" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

&zerotrustdnslocation.ZeroTrustDnsLocationEndpointsIpv4 {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4.property.enabled">Enabled</a></code> | <code>interface{}</code> | True if the endpoint is enabled for this location. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

True if the endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}

---

### ZeroTrustDnsLocationEndpointsIpv6 <a name="ZeroTrustDnsLocationEndpointsIpv6" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

&zerotrustdnslocation.ZeroTrustDnsLocationEndpointsIpv6 {
	Enabled: interface{},
	Networks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6.property.enabled">Enabled</a></code> | <code>interface{}</code> | True if the endpoint is enabled for this location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6.property.networks">Networks</a></code> | <code>interface{}</code> | A list of allowed source IPv6 network ranges for this endpoint. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

True if the endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6.property.networks"></a>

```go
Networks interface{}
```

- *Type:* interface{}

A list of allowed source IPv6 network ranges for this endpoint.

When empty, all source IPs are allowed. A non-empty list is only effective if the endpoint is enabled for this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}

---

### ZeroTrustDnsLocationEndpointsIpv6Networks <a name="ZeroTrustDnsLocationEndpointsIpv6Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

&zerotrustdnslocation.ZeroTrustDnsLocationEndpointsIpv6Networks {
	Network: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks.property.network">Network</a></code> | <code>*string</code> | The IPv6 address or IPv6 CIDR. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks.property.network"></a>

```go
Network *string
```

- *Type:* *string

The IPv6 address or IPv6 CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}

---

### ZeroTrustDnsLocationNetworks <a name="ZeroTrustDnsLocationNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

&zerotrustdnslocation.ZeroTrustDnsLocationNetworks {
	Network: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks.property.network">Network</a></code> | <code>*string</code> | The IPv4 address or IPv4 CIDR. IPv4 CIDRs are limited to a maximum of /24. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks.property.network"></a>

```go
Network *string
```

- *Type:* *string

The IPv4 address or IPv4 CIDR. IPv4 CIDRs are limited to a maximum of /24.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDnsLocationEndpointsDohNetworksList <a name="ZeroTrustDnsLocationEndpointsDohNetworksList" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.NewZeroTrustDnsLocationEndpointsDohNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustDnsLocationEndpointsDohNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.get"></a>

```go
func Get(index *f64) ZeroTrustDnsLocationEndpointsDohNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDnsLocationEndpointsDohNetworksOutputReference <a name="ZeroTrustDnsLocationEndpointsDohNetworksOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.NewZeroTrustDnsLocationEndpointsDohNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustDnsLocationEndpointsDohNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDnsLocationEndpointsDohOutputReference <a name="ZeroTrustDnsLocationEndpointsDohOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.NewZeroTrustDnsLocationEndpointsDohOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustDnsLocationEndpointsDohOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resetNetworks">ResetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resetRequireToken">ResetRequireToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.putNetworks"></a>

```go
func PutNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.putNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resetNetworks"></a>

```go
func ResetNetworks()
```

##### `ResetRequireToken` <a name="ResetRequireToken" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resetRequireToken"></a>

```go
func ResetRequireToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList">ZeroTrustDnsLocationEndpointsDohNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.networksInput">NetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.requireTokenInput">RequireTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.requireToken">RequireToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.networks"></a>

```go
func Networks() ZeroTrustDnsLocationEndpointsDohNetworksList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList">ZeroTrustDnsLocationEndpointsDohNetworksList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.networksInput"></a>

```go
func NetworksInput() interface{}
```

- *Type:* interface{}

---

##### `RequireTokenInput`<sup>Optional</sup> <a name="RequireTokenInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.requireTokenInput"></a>

```go
func RequireTokenInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `RequireToken`<sup>Required</sup> <a name="RequireToken" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.requireToken"></a>

```go
func RequireToken() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDnsLocationEndpointsDotNetworksList <a name="ZeroTrustDnsLocationEndpointsDotNetworksList" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.NewZeroTrustDnsLocationEndpointsDotNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustDnsLocationEndpointsDotNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.get"></a>

```go
func Get(index *f64) ZeroTrustDnsLocationEndpointsDotNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDnsLocationEndpointsDotNetworksOutputReference <a name="ZeroTrustDnsLocationEndpointsDotNetworksOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.NewZeroTrustDnsLocationEndpointsDotNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustDnsLocationEndpointsDotNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDnsLocationEndpointsDotOutputReference <a name="ZeroTrustDnsLocationEndpointsDotOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.NewZeroTrustDnsLocationEndpointsDotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustDnsLocationEndpointsDotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resetNetworks">ResetNetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.putNetworks"></a>

```go
func PutNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.putNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resetNetworks"></a>

```go
func ResetNetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList">ZeroTrustDnsLocationEndpointsDotNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.networksInput">NetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.networks"></a>

```go
func Networks() ZeroTrustDnsLocationEndpointsDotNetworksList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList">ZeroTrustDnsLocationEndpointsDotNetworksList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.networksInput"></a>

```go
func NetworksInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDnsLocationEndpointsIpv4OutputReference <a name="ZeroTrustDnsLocationEndpointsIpv4OutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.NewZeroTrustDnsLocationEndpointsIpv4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustDnsLocationEndpointsIpv4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDnsLocationEndpointsIpv6NetworksList <a name="ZeroTrustDnsLocationEndpointsIpv6NetworksList" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.NewZeroTrustDnsLocationEndpointsIpv6NetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustDnsLocationEndpointsIpv6NetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.get"></a>

```go
func Get(index *f64) ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference <a name="ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.NewZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDnsLocationEndpointsIpv6OutputReference <a name="ZeroTrustDnsLocationEndpointsIpv6OutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.NewZeroTrustDnsLocationEndpointsIpv6OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustDnsLocationEndpointsIpv6OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resetNetworks">ResetNetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.putNetworks"></a>

```go
func PutNetworks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.putNetworks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resetNetworks"></a>

```go
func ResetNetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList">ZeroTrustDnsLocationEndpointsIpv6NetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.networksInput">NetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.networks"></a>

```go
func Networks() ZeroTrustDnsLocationEndpointsIpv6NetworksList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList">ZeroTrustDnsLocationEndpointsIpv6NetworksList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.networksInput"></a>

```go
func NetworksInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDnsLocationEndpointsOutputReference <a name="ZeroTrustDnsLocationEndpointsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.NewZeroTrustDnsLocationEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ZeroTrustDnsLocationEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDoh">PutDoh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDot">PutDot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv4">PutIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv6">PutIpv6</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDoh` <a name="PutDoh" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDoh"></a>

```go
func PutDoh(value ZeroTrustDnsLocationEndpointsDoh)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDoh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a>

---

##### `PutDot` <a name="PutDot" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDot"></a>

```go
func PutDot(value ZeroTrustDnsLocationEndpointsDot)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a>

---

##### `PutIpv4` <a name="PutIpv4" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv4"></a>

```go
func PutIpv4(value ZeroTrustDnsLocationEndpointsIpv4)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a>

---

##### `PutIpv6` <a name="PutIpv6" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv6"></a>

```go
func PutIpv6(value ZeroTrustDnsLocationEndpointsIpv6)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.doh">Doh</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference">ZeroTrustDnsLocationEndpointsDohOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dot">Dot</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference">ZeroTrustDnsLocationEndpointsDotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference">ZeroTrustDnsLocationEndpointsIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference">ZeroTrustDnsLocationEndpointsIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dohInput">DohInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dotInput">DotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv4Input">Ipv4Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Doh`<sup>Required</sup> <a name="Doh" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.doh"></a>

```go
func Doh() ZeroTrustDnsLocationEndpointsDohOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference">ZeroTrustDnsLocationEndpointsDohOutputReference</a>

---

##### `Dot`<sup>Required</sup> <a name="Dot" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dot"></a>

```go
func Dot() ZeroTrustDnsLocationEndpointsDotOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference">ZeroTrustDnsLocationEndpointsDotOutputReference</a>

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv4"></a>

```go
func Ipv4() ZeroTrustDnsLocationEndpointsIpv4OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference">ZeroTrustDnsLocationEndpointsIpv4OutputReference</a>

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv6"></a>

```go
func Ipv6() ZeroTrustDnsLocationEndpointsIpv6OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference">ZeroTrustDnsLocationEndpointsIpv6OutputReference</a>

---

##### `DohInput`<sup>Optional</sup> <a name="DohInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dohInput"></a>

```go
func DohInput() interface{}
```

- *Type:* interface{}

---

##### `DotInput`<sup>Optional</sup> <a name="DotInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dotInput"></a>

```go
func DotInput() interface{}
```

- *Type:* interface{}

---

##### `Ipv4Input`<sup>Optional</sup> <a name="Ipv4Input" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv4Input"></a>

```go
func Ipv4Input() interface{}
```

- *Type:* interface{}

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv6Input"></a>

```go
func Ipv6Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDnsLocationNetworksList <a name="ZeroTrustDnsLocationNetworksList" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.NewZeroTrustDnsLocationNetworksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustDnsLocationNetworksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.get"></a>

```go
func Get(index *f64) ZeroTrustDnsLocationNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDnsLocationNetworksOutputReference <a name="ZeroTrustDnsLocationNetworksOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdnslocation"

zerotrustdnslocation.NewZeroTrustDnsLocationNetworksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustDnsLocationNetworksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



