# `zeroTrustDeviceDefaultProfileLocalDomainFallback` Submodule <a name="`zeroTrustDeviceDefaultProfileLocalDomainFallback` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceDefaultProfileLocalDomainFallback <a name="ZeroTrustDeviceDefaultProfileLocalDomainFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback cloudflare_zero_trust_device_default_profile_local_domain_fallback}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdevicedefaultprofilelocaldomainfallback"

zerotrustdevicedefaultprofilelocaldomainfallback.NewZeroTrustDeviceDefaultProfileLocalDomainFallback(scope Construct, id *string, config ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig) ZeroTrustDeviceDefaultProfileLocalDomainFallback
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig">ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig">ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.putDomains">PutDomains</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDomains` <a name="PutDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.putDomains"></a>

```go
func PutDomains(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.putDomains.parameter.value"></a>

- *Type:* interface{}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceDefaultProfileLocalDomainFallback resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdevicedefaultprofilelocaldomainfallback"

zerotrustdevicedefaultprofilelocaldomainfallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdevicedefaultprofilelocaldomainfallback"

zerotrustdevicedefaultprofilelocaldomainfallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdevicedefaultprofilelocaldomainfallback"

zerotrustdevicedefaultprofilelocaldomainfallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdevicedefaultprofilelocaldomainfallback"

zerotrustdevicedefaultprofilelocaldomainfallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZeroTrustDeviceDefaultProfileLocalDomainFallback resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustDeviceDefaultProfileLocalDomainFallback to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustDeviceDefaultProfileLocalDomainFallback that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceDefaultProfileLocalDomainFallback to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.domains">Domains</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList">ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.domainsInput">DomainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.domains"></a>

```go
func Domains() ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList">ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.domainsInput"></a>

```go
func DomainsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig <a name="ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdevicedefaultprofilelocaldomainfallback"

&zerotrustdevicedefaultprofilelocaldomainfallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Domains: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#account_id ZeroTrustDeviceDefaultProfileLocalDomainFallback#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.domains">Domains</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#domains ZeroTrustDeviceDefaultProfileLocalDomainFallback#domains}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#account_id ZeroTrustDeviceDefaultProfileLocalDomainFallback#account_id}.

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.domains"></a>

```go
Domains interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#domains ZeroTrustDeviceDefaultProfileLocalDomainFallback#domains}.

---

### ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains <a name="ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdevicedefaultprofilelocaldomainfallback"

&zerotrustdevicedefaultprofilelocaldomainfallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains {
	Suffix: *string,
	Description: *string,
	DnsServer: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains.property.suffix">Suffix</a></code> | <code>*string</code> | The domain suffix to match when resolving locally. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains.property.description">Description</a></code> | <code>*string</code> | A description of the fallback domain, displayed in the client UI. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains.property.dnsServer">DnsServer</a></code> | <code>*[]*string</code> | A list of IP addresses to handle domain resolution. |

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

The domain suffix to match when resolving locally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#suffix ZeroTrustDeviceDefaultProfileLocalDomainFallback#suffix}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the fallback domain, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#description ZeroTrustDeviceDefaultProfileLocalDomainFallback#description}

---

##### `DnsServer`<sup>Optional</sup> <a name="DnsServer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains.property.dnsServer"></a>

```go
DnsServer *[]*string
```

- *Type:* *[]*string

A list of IP addresses to handle domain resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#dns_server ZeroTrustDeviceDefaultProfileLocalDomainFallback#dns_server}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList <a name="ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdevicedefaultprofilelocaldomainfallback"

zerotrustdevicedefaultprofilelocaldomainfallback.NewZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.get"></a>

```go
func Get(index *f64) ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference <a name="ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/zerotrustdevicedefaultprofilelocaldomainfallback"

zerotrustdevicedefaultprofilelocaldomainfallback.NewZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.resetDnsServer">ResetDnsServer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDnsServer` <a name="ResetDnsServer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.resetDnsServer"></a>

```go
func ResetDnsServer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.dnsServerInput">DnsServerInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.dnsServer">DnsServer</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DnsServerInput`<sup>Optional</sup> <a name="DnsServerInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.dnsServerInput"></a>

```go
func DnsServerInput() *[]*string
```

- *Type:* *[]*string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.dnsServer"></a>

```go
func DnsServer() *[]*string
```

- *Type:* *[]*string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



