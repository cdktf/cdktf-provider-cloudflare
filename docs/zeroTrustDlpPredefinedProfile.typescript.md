# `zeroTrustDlpPredefinedProfile` Submodule <a name="`zeroTrustDlpPredefinedProfile` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpPredefinedProfile <a name="ZeroTrustDlpPredefinedProfile" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer"></a>

```typescript
import { zeroTrustDlpPredefinedProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile(scope: Construct, id: string, config: ZeroTrustDlpPredefinedProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig">ZeroTrustDlpPredefinedProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig">ZeroTrustDlpPredefinedProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.putContextAwareness">putContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAiContextEnabled">resetAiContextEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAllowedMatchCount">resetAllowedMatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetConfidenceThreshold">resetConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetContextAwareness">resetContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetEntries">resetEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOcrEnabled">resetOcrEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContextAwareness` <a name="putContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.putContextAwareness"></a>

```typescript
public putContextAwareness(value: ZeroTrustDlpPredefinedProfileContextAwareness): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.putContextAwareness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwareness">ZeroTrustDlpPredefinedProfileContextAwareness</a>

---

##### `putEntries` <a name="putEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.putEntries"></a>

```typescript
public putEntries(value: IResolvable | ZeroTrustDlpPredefinedProfileEntries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.putEntries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>[]

---

##### `resetAiContextEnabled` <a name="resetAiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAiContextEnabled"></a>

```typescript
public resetAiContextEnabled(): void
```

##### `resetAllowedMatchCount` <a name="resetAllowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAllowedMatchCount"></a>

```typescript
public resetAllowedMatchCount(): void
```

##### `resetConfidenceThreshold` <a name="resetConfidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetConfidenceThreshold"></a>

```typescript
public resetConfidenceThreshold(): void
```

##### `resetContextAwareness` <a name="resetContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetContextAwareness"></a>

```typescript
public resetContextAwareness(): void
```

##### `resetEntries` <a name="resetEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetEntries"></a>

```typescript
public resetEntries(): void
```

##### `resetOcrEnabled` <a name="resetOcrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOcrEnabled"></a>

```typescript
public resetOcrEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDlpPredefinedProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isConstruct"></a>

```typescript
import { zeroTrustDlpPredefinedProfile } from '@cdktf/provider-cloudflare'

zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformElement"></a>

```typescript
import { zeroTrustDlpPredefinedProfile } from '@cdktf/provider-cloudflare'

zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformResource"></a>

```typescript
import { zeroTrustDlpPredefinedProfile } from '@cdktf/provider-cloudflare'

zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport"></a>

```typescript
import { zeroTrustDlpPredefinedProfile } from '@cdktf/provider-cloudflare'

zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustDlpPredefinedProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDlpPredefinedProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDlpPredefinedProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpPredefinedProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference">ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entries">entries</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList">ZeroTrustDlpPredefinedProfileEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.openAccess">openAccess</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabledInput">aiContextEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCountInput">allowedMatchCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThresholdInput">confidenceThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.contextAwarenessInput">contextAwarenessInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwareness">ZeroTrustDlpPredefinedProfileContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entriesInput">entriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabledInput">ocrEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabled">aiContextEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCount">allowedMatchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThreshold">confidenceThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabled">ocrEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contextAwareness`<sup>Required</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.contextAwareness"></a>

```typescript
public readonly contextAwareness: ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference">ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entries"></a>

```typescript
public readonly entries: ZeroTrustDlpPredefinedProfileEntriesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList">ZeroTrustDlpPredefinedProfileEntriesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `openAccess`<sup>Required</sup> <a name="openAccess" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.openAccess"></a>

```typescript
public readonly openAccess: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `aiContextEnabledInput`<sup>Optional</sup> <a name="aiContextEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabledInput"></a>

```typescript
public readonly aiContextEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedMatchCountInput`<sup>Optional</sup> <a name="allowedMatchCountInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCountInput"></a>

```typescript
public readonly allowedMatchCountInput: number;
```

- *Type:* number

---

##### `confidenceThresholdInput`<sup>Optional</sup> <a name="confidenceThresholdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThresholdInput"></a>

```typescript
public readonly confidenceThresholdInput: string;
```

- *Type:* string

---

##### `contextAwarenessInput`<sup>Optional</sup> <a name="contextAwarenessInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.contextAwarenessInput"></a>

```typescript
public readonly contextAwarenessInput: IResolvable | ZeroTrustDlpPredefinedProfileContextAwareness;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwareness">ZeroTrustDlpPredefinedProfileContextAwareness</a>

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entriesInput"></a>

```typescript
public readonly entriesInput: IResolvable | ZeroTrustDlpPredefinedProfileEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>[]

---

##### `ocrEnabledInput`<sup>Optional</sup> <a name="ocrEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabledInput"></a>

```typescript
public readonly ocrEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `aiContextEnabled`<sup>Required</sup> <a name="aiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabled"></a>

```typescript
public readonly aiContextEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedMatchCount`<sup>Required</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCount"></a>

```typescript
public readonly allowedMatchCount: number;
```

- *Type:* number

---

##### `confidenceThreshold`<sup>Required</sup> <a name="confidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThreshold"></a>

```typescript
public readonly confidenceThreshold: string;
```

- *Type:* string

---

##### `ocrEnabled`<sup>Required</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabled"></a>

```typescript
public readonly ocrEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpPredefinedProfileConfig <a name="ZeroTrustDlpPredefinedProfileConfig" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.Initializer"></a>

```typescript
import { zeroTrustDlpPredefinedProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpPredefinedProfileConfig: zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#account_id ZeroTrustDlpPredefinedProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.profileId">profileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#profile_id ZeroTrustDlpPredefinedProfile#profile_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.aiContextEnabled">aiContextEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#ai_context_enabled ZeroTrustDlpPredefinedProfile#ai_context_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.allowedMatchCount">allowedMatchCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#allowed_match_count ZeroTrustDlpPredefinedProfile#allowed_match_count}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.confidenceThreshold">confidenceThreshold</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#confidence_threshold ZeroTrustDlpPredefinedProfile#confidence_threshold}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwareness">ZeroTrustDlpPredefinedProfileContextAwareness</a></code> | Scan the context of predefined entries to only return matches surrounded by keywords. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.entries">entries</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#entries ZeroTrustDlpPredefinedProfile#entries}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.ocrEnabled">ocrEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#ocr_enabled ZeroTrustDlpPredefinedProfile#ocr_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#account_id ZeroTrustDlpPredefinedProfile#account_id}.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#profile_id ZeroTrustDlpPredefinedProfile#profile_id}.

---

##### `aiContextEnabled`<sup>Optional</sup> <a name="aiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.aiContextEnabled"></a>

```typescript
public readonly aiContextEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#ai_context_enabled ZeroTrustDlpPredefinedProfile#ai_context_enabled}.

---

##### `allowedMatchCount`<sup>Optional</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.allowedMatchCount"></a>

```typescript
public readonly allowedMatchCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#allowed_match_count ZeroTrustDlpPredefinedProfile#allowed_match_count}.

---

##### `confidenceThreshold`<sup>Optional</sup> <a name="confidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.confidenceThreshold"></a>

```typescript
public readonly confidenceThreshold: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#confidence_threshold ZeroTrustDlpPredefinedProfile#confidence_threshold}.

---

##### `contextAwareness`<sup>Optional</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.contextAwareness"></a>

```typescript
public readonly contextAwareness: ZeroTrustDlpPredefinedProfileContextAwareness;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwareness">ZeroTrustDlpPredefinedProfileContextAwareness</a>

Scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#context_awareness ZeroTrustDlpPredefinedProfile#context_awareness}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.entries"></a>

```typescript
public readonly entries: IResolvable | ZeroTrustDlpPredefinedProfileEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#entries ZeroTrustDlpPredefinedProfile#entries}.

---

##### `ocrEnabled`<sup>Optional</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.ocrEnabled"></a>

```typescript
public readonly ocrEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#ocr_enabled ZeroTrustDlpPredefinedProfile#ocr_enabled}.

---

### ZeroTrustDlpPredefinedProfileContextAwareness <a name="ZeroTrustDlpPredefinedProfileContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwareness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwareness.Initializer"></a>

```typescript
import { zeroTrustDlpPredefinedProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpPredefinedProfileContextAwareness: zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwareness = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwareness.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, scan the context of predefined entries to only return matches surrounded by keywords. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwareness.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkip">ZeroTrustDlpPredefinedProfileContextAwarenessSkip</a></code> | Content types to exclude from context analysis and return all matches. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwareness.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#enabled ZeroTrustDlpPredefinedProfile#enabled}

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwareness.property.skip"></a>

```typescript
public readonly skip: ZeroTrustDlpPredefinedProfileContextAwarenessSkip;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkip">ZeroTrustDlpPredefinedProfileContextAwarenessSkip</a>

Content types to exclude from context analysis and return all matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#skip ZeroTrustDlpPredefinedProfile#skip}

---

### ZeroTrustDlpPredefinedProfileContextAwarenessSkip <a name="ZeroTrustDlpPredefinedProfileContextAwarenessSkip" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkip.Initializer"></a>

```typescript
import { zeroTrustDlpPredefinedProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpPredefinedProfileContextAwarenessSkip: zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkip = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkip.property.files">files</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the content type is a file, skip context analysis and return all matches. |

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkip.property.files"></a>

```typescript
public readonly files: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the content type is a file, skip context analysis and return all matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#files ZeroTrustDlpPredefinedProfile#files}

---

### ZeroTrustDlpPredefinedProfileEntries <a name="ZeroTrustDlpPredefinedProfileEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.Initializer"></a>

```typescript
import { zeroTrustDlpPredefinedProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDlpPredefinedProfileEntries: zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#enabled ZeroTrustDlpPredefinedProfile#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#id ZeroTrustDlpPredefinedProfile#id}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#enabled ZeroTrustDlpPredefinedProfile#enabled}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_predefined_profile#id ZeroTrustDlpPredefinedProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference <a name="ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpPredefinedProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.putSkip">putSkip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSkip` <a name="putSkip" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.putSkip"></a>

```typescript
public putSkip(value: ZeroTrustDlpPredefinedProfileContextAwarenessSkip): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.putSkip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkip">ZeroTrustDlpPredefinedProfileContextAwarenessSkip</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference">ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.skipInput">skipInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkip">ZeroTrustDlpPredefinedProfileContextAwarenessSkip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwareness">ZeroTrustDlpPredefinedProfileContextAwareness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.skip"></a>

```typescript
public readonly skip: ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference">ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipInput`<sup>Optional</sup> <a name="skipInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.skipInput"></a>

```typescript
public readonly skipInput: IResolvable | ZeroTrustDlpPredefinedProfileContextAwarenessSkip;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkip">ZeroTrustDlpPredefinedProfileContextAwarenessSkip</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpPredefinedProfileContextAwareness;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwareness">ZeroTrustDlpPredefinedProfileContextAwareness</a>

---


### ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference <a name="ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpPredefinedProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.filesInput">filesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.files">files</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkip">ZeroTrustDlpPredefinedProfileContextAwarenessSkip</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filesInput`<sup>Optional</sup> <a name="filesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.filesInput"></a>

```typescript
public readonly filesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.files"></a>

```typescript
public readonly files: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpPredefinedProfileContextAwarenessSkip;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileContextAwarenessSkip">ZeroTrustDlpPredefinedProfileContextAwarenessSkip</a>

---


### ZeroTrustDlpPredefinedProfileEntriesList <a name="ZeroTrustDlpPredefinedProfileEntriesList" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer"></a>

```typescript
import { zeroTrustDlpPredefinedProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.get"></a>

```typescript
public get(index: number): ZeroTrustDlpPredefinedProfileEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpPredefinedProfileEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>[]

---


### ZeroTrustDlpPredefinedProfileEntriesOutputReference <a name="ZeroTrustDlpPredefinedProfileEntriesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer"></a>

```typescript
import { zeroTrustDlpPredefinedProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDlpPredefinedProfileEntries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>

---



