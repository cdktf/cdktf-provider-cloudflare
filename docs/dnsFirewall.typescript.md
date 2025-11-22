# `dnsFirewall` Submodule <a name="`dnsFirewall` Submodule" id="@cdktf/provider-cloudflare.dnsFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsFirewall <a name="DnsFirewall" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall cloudflare_dns_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer"></a>

```typescript
import { dnsFirewall } from '@cdktf/provider-cloudflare'

new dnsFirewall.DnsFirewall(scope: Construct, id: string, config: DnsFirewallConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig">DnsFirewallConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig">DnsFirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation">putAttackMitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetAttackMitigation">resetAttackMitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetDeprecateAnyRequests">resetDeprecateAnyRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetEcsFallback">resetEcsFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMaximumCacheTtl">resetMaximumCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMinimumCacheTtl">resetMinimumCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetNegativeCacheTtl">resetNegativeCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRatelimit">resetRatelimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRetries">resetRetries</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttackMitigation` <a name="putAttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation"></a>

```typescript
public putAttackMitigation(value: DnsFirewallAttackMitigation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>

---

##### `resetAttackMitigation` <a name="resetAttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetAttackMitigation"></a>

```typescript
public resetAttackMitigation(): void
```

##### `resetDeprecateAnyRequests` <a name="resetDeprecateAnyRequests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetDeprecateAnyRequests"></a>

```typescript
public resetDeprecateAnyRequests(): void
```

##### `resetEcsFallback` <a name="resetEcsFallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetEcsFallback"></a>

```typescript
public resetEcsFallback(): void
```

##### `resetMaximumCacheTtl` <a name="resetMaximumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMaximumCacheTtl"></a>

```typescript
public resetMaximumCacheTtl(): void
```

##### `resetMinimumCacheTtl` <a name="resetMinimumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMinimumCacheTtl"></a>

```typescript
public resetMinimumCacheTtl(): void
```

##### `resetNegativeCacheTtl` <a name="resetNegativeCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetNegativeCacheTtl"></a>

```typescript
public resetNegativeCacheTtl(): void
```

##### `resetRatelimit` <a name="resetRatelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRatelimit"></a>

```typescript
public resetRatelimit(): void
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRetries"></a>

```typescript
public resetRetries(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsFirewall resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isConstruct"></a>

```typescript
import { dnsFirewall } from '@cdktf/provider-cloudflare'

dnsFirewall.DnsFirewall.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformElement"></a>

```typescript
import { dnsFirewall } from '@cdktf/provider-cloudflare'

dnsFirewall.DnsFirewall.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformResource"></a>

```typescript
import { dnsFirewall } from '@cdktf/provider-cloudflare'

dnsFirewall.DnsFirewall.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport"></a>

```typescript
import { dnsFirewall } from '@cdktf/provider-cloudflare'

dnsFirewall.DnsFirewall.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DnsFirewall resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsFirewall to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigation">attackMitigation</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference">DnsFirewallAttackMitigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dnsFirewallIps">dnsFirewallIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigationInput">attackMitigationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequestsInput">deprecateAnyRequestsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallbackInput">ecsFallbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtlInput">maximumCacheTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtlInput">minimumCacheTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtlInput">negativeCacheTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimitInput">ratelimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIpsInput">upstreamIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequests">deprecateAnyRequests</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallback">ecsFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtl">maximumCacheTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtl">minimumCacheTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtl">negativeCacheTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimit">ratelimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIps">upstreamIps</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attackMitigation`<sup>Required</sup> <a name="attackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigation"></a>

```typescript
public readonly attackMitigation: DnsFirewallAttackMitigationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference">DnsFirewallAttackMitigationOutputReference</a>

---

##### `dnsFirewallIps`<sup>Required</sup> <a name="dnsFirewallIps" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dnsFirewallIps"></a>

```typescript
public readonly dnsFirewallIps: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `attackMitigationInput`<sup>Optional</sup> <a name="attackMitigationInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigationInput"></a>

```typescript
public readonly attackMitigationInput: IResolvable | DnsFirewallAttackMitigation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>

---

##### `deprecateAnyRequestsInput`<sup>Optional</sup> <a name="deprecateAnyRequestsInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequestsInput"></a>

```typescript
public readonly deprecateAnyRequestsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ecsFallbackInput`<sup>Optional</sup> <a name="ecsFallbackInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallbackInput"></a>

```typescript
public readonly ecsFallbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maximumCacheTtlInput`<sup>Optional</sup> <a name="maximumCacheTtlInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtlInput"></a>

```typescript
public readonly maximumCacheTtlInput: number;
```

- *Type:* number

---

##### `minimumCacheTtlInput`<sup>Optional</sup> <a name="minimumCacheTtlInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtlInput"></a>

```typescript
public readonly minimumCacheTtlInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `negativeCacheTtlInput`<sup>Optional</sup> <a name="negativeCacheTtlInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtlInput"></a>

```typescript
public readonly negativeCacheTtlInput: number;
```

- *Type:* number

---

##### `ratelimitInput`<sup>Optional</sup> <a name="ratelimitInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimitInput"></a>

```typescript
public readonly ratelimitInput: number;
```

- *Type:* number

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `upstreamIpsInput`<sup>Optional</sup> <a name="upstreamIpsInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIpsInput"></a>

```typescript
public readonly upstreamIpsInput: string[];
```

- *Type:* string[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `deprecateAnyRequests`<sup>Required</sup> <a name="deprecateAnyRequests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequests"></a>

```typescript
public readonly deprecateAnyRequests: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ecsFallback`<sup>Required</sup> <a name="ecsFallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallback"></a>

```typescript
public readonly ecsFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maximumCacheTtl`<sup>Required</sup> <a name="maximumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtl"></a>

```typescript
public readonly maximumCacheTtl: number;
```

- *Type:* number

---

##### `minimumCacheTtl`<sup>Required</sup> <a name="minimumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtl"></a>

```typescript
public readonly minimumCacheTtl: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `negativeCacheTtl`<sup>Required</sup> <a name="negativeCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtl"></a>

```typescript
public readonly negativeCacheTtl: number;
```

- *Type:* number

---

##### `ratelimit`<sup>Required</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimit"></a>

```typescript
public readonly ratelimit: number;
```

- *Type:* number

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `upstreamIps`<sup>Required</sup> <a name="upstreamIps" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIps"></a>

```typescript
public readonly upstreamIps: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsFirewallAttackMitigation <a name="DnsFirewallAttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.Initializer"></a>

```typescript
import { dnsFirewall } from '@cdktf/provider-cloudflare'

const dnsFirewallAttackMitigation: dnsFirewall.DnsFirewallAttackMitigation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.onlyWhenUpstreamUnhealthy">onlyWhenUpstreamUnhealthy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Only mitigate attacks when upstream servers seem unhealthy. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#enabled DnsFirewall#enabled}

---

##### `onlyWhenUpstreamUnhealthy`<sup>Optional</sup> <a name="onlyWhenUpstreamUnhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.onlyWhenUpstreamUnhealthy"></a>

```typescript
public readonly onlyWhenUpstreamUnhealthy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Only mitigate attacks when upstream servers seem unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#only_when_upstream_unhealthy DnsFirewall#only_when_upstream_unhealthy}

---

### DnsFirewallConfig <a name="DnsFirewallConfig" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.Initializer"></a>

```typescript
import { dnsFirewall } from '@cdktf/provider-cloudflare'

const dnsFirewallConfig: dnsFirewall.DnsFirewallConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.name">name</a></code> | <code>string</code> | DNS Firewall cluster name. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.upstreamIps">upstreamIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.attackMitigation">attackMitigation</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a></code> | Attack mitigation settings. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.deprecateAnyRequests">deprecateAnyRequests</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to refuse to answer queries for the ANY type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ecsFallback">ecsFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.maximumCacheTtl">maximumCacheTtl</a></code> | <code>number</code> | By default, Cloudflare attempts to cache responses for as long as indicated by the TTL received from upstream nameservers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.minimumCacheTtl">minimumCacheTtl</a></code> | <code>number</code> | By default, Cloudflare attempts to cache responses for as long as indicated by the TTL received from upstream nameservers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.negativeCacheTtl">negativeCacheTtl</a></code> | <code>number</code> | This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ratelimit">ratelimit</a></code> | <code>number</code> | Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster). |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.retries">retries</a></code> | <code>number</code> | Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#account_id DnsFirewall#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

DNS Firewall cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#name DnsFirewall#name}

---

##### `upstreamIps`<sup>Required</sup> <a name="upstreamIps" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.upstreamIps"></a>

```typescript
public readonly upstreamIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}.

---

##### `attackMitigation`<sup>Optional</sup> <a name="attackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.attackMitigation"></a>

```typescript
public readonly attackMitigation: DnsFirewallAttackMitigation;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>

Attack mitigation settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#attack_mitigation DnsFirewall#attack_mitigation}

---

##### `deprecateAnyRequests`<sup>Optional</sup> <a name="deprecateAnyRequests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.deprecateAnyRequests"></a>

```typescript
public readonly deprecateAnyRequests: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to refuse to answer queries for the ANY type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#deprecate_any_requests DnsFirewall#deprecate_any_requests}

---

##### `ecsFallback`<sup>Optional</sup> <a name="ecsFallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ecsFallback"></a>

```typescript
public readonly ecsFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#ecs_fallback DnsFirewall#ecs_fallback}

---

##### `maximumCacheTtl`<sup>Optional</sup> <a name="maximumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.maximumCacheTtl"></a>

```typescript
public readonly maximumCacheTtl: number;
```

- *Type:* number

By default, Cloudflare attempts to cache responses for as long as indicated by the TTL received from upstream nameservers.

This setting
sets an upper bound on this duration. For caching purposes, higher TTLs
will be decreased to the maximum value defined by this setting.

This setting does not affect the TTL value in the DNS response
Cloudflare returns to clients. Cloudflare will always forward the TTL
value received from upstream nameservers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#maximum_cache_ttl DnsFirewall#maximum_cache_ttl}

---

##### `minimumCacheTtl`<sup>Optional</sup> <a name="minimumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.minimumCacheTtl"></a>

```typescript
public readonly minimumCacheTtl: number;
```

- *Type:* number

By default, Cloudflare attempts to cache responses for as long as indicated by the TTL received from upstream nameservers.

This setting
sets a lower bound on this duration. For caching purposes, lower TTLs
will be increased to the minimum value defined by this setting.

This setting does not affect the TTL value in the DNS response
Cloudflare returns to clients. Cloudflare will always forward the TTL
value received from upstream nameservers.

Note that, even with this setting, there is no guarantee that a
response will be cached for at least the specified duration. Cached
responses may be removed earlier for capacity or other operational
reasons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#minimum_cache_ttl DnsFirewall#minimum_cache_ttl}

---

##### `negativeCacheTtl`<sup>Optional</sup> <a name="negativeCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.negativeCacheTtl"></a>

```typescript
public readonly negativeCacheTtl: number;
```

- *Type:* number

This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers.

This setting does not affect the TTL value in the DNS response
Cloudflare returns to clients. Cloudflare will always forward the TTL
value received from upstream nameservers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#negative_cache_ttl DnsFirewall#negative_cache_ttl}

---

##### `ratelimit`<sup>Optional</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ratelimit"></a>

```typescript
public readonly ratelimit: number;
```

- *Type:* number

Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#ratelimit DnsFirewall#ratelimit}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#retries DnsFirewall#retries}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsFirewallAttackMitigationOutputReference <a name="DnsFirewallAttackMitigationOutputReference" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer"></a>

```typescript
import { dnsFirewall } from '@cdktf/provider-cloudflare'

new dnsFirewall.DnsFirewallAttackMitigationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetOnlyWhenUpstreamUnhealthy">resetOnlyWhenUpstreamUnhealthy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetOnlyWhenUpstreamUnhealthy` <a name="resetOnlyWhenUpstreamUnhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetOnlyWhenUpstreamUnhealthy"></a>

```typescript
public resetOnlyWhenUpstreamUnhealthy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthyInput">onlyWhenUpstreamUnhealthyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthy">onlyWhenUpstreamUnhealthy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onlyWhenUpstreamUnhealthyInput`<sup>Optional</sup> <a name="onlyWhenUpstreamUnhealthyInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthyInput"></a>

```typescript
public readonly onlyWhenUpstreamUnhealthyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onlyWhenUpstreamUnhealthy`<sup>Required</sup> <a name="onlyWhenUpstreamUnhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthy"></a>

```typescript
public readonly onlyWhenUpstreamUnhealthy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsFirewallAttackMitigation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>

---



